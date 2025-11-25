const form = document.getElementById("sabotageQuiz");
const resultSection = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const resultIntro = document.getElementById("resultIntro");
const resultBreakdown = document.getElementById("resultBreakdown");

const sabotageProfiles = {
  disappearing_act: {
    title: "Disappearing Act",
    intro: "Your self sabotage style is to slide out of reach before anyone can really hold you.",
    breakdown: `
You do not ruin things because you do not care. You ruin things because caring feels dangerous.

When closeness starts to feel real, your body remembers every time love turned on you. Instead of saying that out loud, you go quiet. You slow the replies. You act busy. You convince yourself it is not that deep.

On the surface you look cold or detached. Inside you are flooded with what ifs. What if they switch up. What if I need them more than they need me. What if I lose myself again.

Your nervous system picked distance as protection. If they can never fully have you, they can never fully drop you.

Your work is not to force yourself to cling. Your work is to stay ten percent closer when every cell in you wants to run. Tiny experiments with honesty. Tiny experiments with being seen. Safety in your body before commitment on paper.`
  },
  over_giver: {
    title: "Over Giver",
    intro: "Your self sabotage style is to give until you disappear and then resent everyone for not saving you.",
    breakdown: `
You lead with effort. You over explain, over love, over fix, over show up. You try to earn what should be given freely.

Underneath that is a story. If I am useful enough, needed enough, loyal enough, they will not leave. They will finally pick me back the way I pick them.

Instead, people get comfortable. They take, receive, lean, and then act confused when you finally snap. They got the benefits. You carried the bill.

Your nervous system decided that your one way to stay safe was to make yourself indispensable. If they need you, maybe they will not abandon you.

Your work is to start giving from a full cup instead of an empty panic. Notice where you rush to fix or prove. Practice letting people sit with their own discomfort. Love that does not include you is not love you can afford anymore.`
  },
  tester: {
    title: "The Tester",
    intro: "Your self sabotage style is to push people to the edge to see if they will stay, then hate that they reached their limit.",
    breakdown: `
You were not taught how to trust calm love. You were taught that everything good has a flip side.

So instead of letting yourself relax into connection, you start testing it. You pull back to see if they chase. You poke jealousy to see if they care. You start arguments to see if they fight for you or walk.

Most of this is not conscious. It is your nervous system saying show me who you are now so I do not get blindsided later.

From the outside it looks like games. On the inside it is quality control.

Your work is to bring the fear into the conversation instead of hiding it behind tests. Saying the quiet part out loud. I get scared and I start pushing. I need to know you see that pattern and want to work with me on it. Real safety cannot grow in a relationship where the other person never knows what test they are taking.`
  },
  chaos_chaser: {
    title: "Chaos Chaser",
    intro: "Your self sabotage style is to create or chase intensity because your body confuses peace with danger.",
    breakdown: `
You are not addicted to pain. You are addicted to the feeling of aliveness you only associate with chaos.

Calm feels suspicious. Consistent feels fake. People who like you too easily feel like a trap. So your nervous system drags you toward roller coasters. Hot and cold. Break up make up. Long paragraphs at 2 am. The rush of almost losing someone then getting them back.

In that cycle, drama becomes proof that it is real. If it did not almost kill us, it probably was not love.

Your work is to slowly re teach your body what real aliveness feels like. Peaceful does not mean boring. Stable does not mean dead. Start noticing the difference between numb and calm, between chemistry and anxiety.

You are allowed a love story that does not require you to bleed for the plot.`
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const scores = {
    disappearing_act: 0,
    over_giver: 0,
    tester: 0,
    chaos_chaser: 0
  };

  const formData = new FormData(form);

  for (let [, value] of formData.entries()) {
    if (scores[value] !== undefined) {
      scores[value] += 1;
    }
  }

  let topStyle = null;
  let topScore = -1;

  for (let style in scores) {
    if (scores[style] > topScore) {
      topScore = scores[style];
      topStyle = style;
    }
  }

  const profile = sabotageProfiles[topStyle];

  resultTitle.textContent = profile.title;
  resultIntro.textContent = profile.intro;
  resultBreakdown.textContent = profile.breakdown.trim();

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth" });
});
