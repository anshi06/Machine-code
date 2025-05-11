export const TOPICS = [
  "React-Router",
  "Jest",
  "React-Testing-Library",
  "ShimmerUI",
  "Cart",
  "Countdown-Timer",
  "MultiLanguageSupport",
  "Infinite-Scroll",
  "Accordian",
  "ReditNestedComponents",
  "ImageSlider",
  "Real Time Updates",
  "You Tube Live Stream Chat",
  "AutoComplete and SearchBar",
  "Building YouTube",
  "Multi Select Component",
  "Text Editor",
  "Responsive Navigation Bar",
  "Analog Clock",
  "Whats app Chat",
  "Snake Game",
  "Tic Tac Toe",
  "Connect Four",
  "Modal Component",
  "Dropdown Menu",
  "Simple Calculator",
  "Drag and Drop List",
  "Image Upload and Preview",
];

export const GIFS_TRENDING_API = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIF_TRENDING_API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

export const languages = [
  { type: "en", content: "Write anything", lang: "English" },
  { type: "hi", content: "कुछ भी लिखो", lang: "Hindi" },
  { type: "sp", content: "escribe cualquier cosa", lang: "Spanish" },
  { type: "ch", content: "写任何东西", lang: "Chinese" },
  { type: "ja", content: "何でも書いてください", lang: "Japenese" },
];

export const accordianData = [
  { title: "Accordian #1", body: "I am Accordian Item" },
  { title: "Accordian #2", body: "I am Accordian Item" },
  { title: "Accordian #3", body: "I am Accordian Item" },
  { title: "Accordian #4", body: "I am Accordian Item" },
  { title: "Accordian #5", body: "I am Accordian Item" },
  { title: "Accordian #6", body: "I am Accordian Item" },
  { title: "Accordian #7", body: "I am Accordian Item" },
  { title: "Accordian #8", body: "I am Accordian Item" },
  { title: "Accordian #9", body: "I am Accordian Item" },
];

export const CommentsData = [
  {
    imgUrl:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1743393893~exp=1743397493~hmac=492ce76a7acd85232fdf37a32ffe8cf89baafa30dd0408f6cabf4507a6b0e1f6&w=826",
    userName: "shadow_fire",
    text: "Hey, have you seen how Reddit structures its nested comments? It’s pretty cool.",
    replies: [
      {
        imgUrl:
          "https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?ga=GA1.1.1874005431.1743393872&semt=ais_hybrid",
        userName: "Doodle",
        text: "Yeah! Each comment can have replies, which can also have replies. It just keeps going.",
        replies: [
          {
            imgUrl:
              "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1743393893~exp=1743397493~hmac=492ce76a7acd85232fdf37a32ffe8cf89baafa30dd0408f6cabf4507a6b0e1f6&w=826",
            userName: "shadow_fire",
            text: "Exactly! It’s an n-level nesting system, meaning comments can go as deep as needed.",
            replies: [
              {
                imgUrl:
                  "https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?ga=GA1.1.1874005431.1743393872&semt=ais_hybrid",
                userName: "Doodle",
                text: "YouTube does something similar for its comment threads. The replies are also nested, just like Reddit.",
                replies: [
                  {
                    imgUrl:
                      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1743393893~exp=1743397493~hmac=492ce76a7acd85232fdf37a32ffe8cf89baafa30dd0408f6cabf4507a6b0e1f6&w=826",
                    userName: "shadow_fire",
                    text: "Right! When building this, we should use recursion to handle dynamic nesting. So, we can create a Comment component that renders itself for each reply inside it.",
                    replies: [
                      {
                        imgUrl:
                          "https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg?ga=GA1.1.1874005431.1743393872&semt=ais_hybrid",
                        userName: "Doodle",
                        text: "Makes sense! Let’s build it using React’s component tree and recursion.",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    imgUrl:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1743393893~exp=1743397493~hmac=492ce76a7acd85232fdf37a32ffe8cf89baafa30dd0408f6cabf4507a6b0e1f6&w=826",
    userName: "shadow_fire",
    text: "Let’s go! 🚀",
  },
];
