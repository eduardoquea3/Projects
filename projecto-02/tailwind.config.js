/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "Light-red": '#ff5757',
        "Orangey-yellow": '#ffb01f',
        "Green-teal": '#00bd91',
        "Cobalt-blue": '#1125d4',
        "Light-red-op": 'rgb(255 87 87 / 0.1)',
        "Orangey-yellow-op": 'rgb(255 176 31 / 0.1)',
        "Green-teal-op": 'rgb(0 189 145 / 0.1)',
        "Cobalt-blue-op": 'rgb(17 37 212 / 0.1)',
        "Light-slate-blue": '#7857ff',
        "Light-royal-blue": '#2e2be9',
        "Violet-blue": '#4e21ca',
        "Persian-blue": 'rgba(36 33 202 / 0)',
        "Pale-blue": '#ebf1ff',
        "Light-lavender": '#c8c7ff',
        "Dark-gray-blue": '#303b5a',
      },
      fontFamily: {
        "Hanken": "Hanken"
      }
    },
  },
  plugins: [],
}

