export default {
  theme: {
    extend: {
      animation: {
        "clip-from-top-animation": "clip 1s ease-in-out 2.5s forwards",
      },
      keyframes: {
        clip: {
          "0%": { "clip-path": "ellipse(100% 100% at 50% 50%)" },
          "100%": { "clip-path": "ellipse(160% 160% at 50% 160%)" },
        },
      },
    },
  },
};
