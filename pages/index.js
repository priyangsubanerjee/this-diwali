/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

export async function getServerSideProps(ctx) {
  let theme = (ctx.query.theme && ctx.query.theme) || 1;
  let name =
    (ctx.query.name && `${ctx.query.name} wishes you,`) || "Wish you a very, ";
  let quote = (ctx.query.quote && ctx.query.quote) || 0;

  return {
    props: {
      theme,
      name,
      quote,
    }, // will be passed to the page component as props
  };
}

export default function Home({ theme, name, quote }) {
  const themeMeta = ["#760229", "#1F2D6A", "#044E4F", "#351C70"];
  const lanterns = [
    "/themes/lantern01.svg",
    "/themes/lantern02.svg",
    "/themes/lantern03.svg",
    "/themes/lantern04.svg",
  ];
  const rangolis = [
    "/themes/rangoli01.svg",
    "/themes/rangoli02.svg",
    "/themes/rangoli03.svg",
    "/themes/rangoli04.svg",
  ];
  const buttons = [
    "/themes/button01.svg",
    "/themes/button02.svg",
    "/themes/button03.svg",
    "/themes/button04.svg",
  ];

  const themes = [
    "/preview/theme01.png",
    "/preview/theme02.png",
    "/preview/theme03.png",
    "/preview/theme04.png",
  ];

  const quotes = [
    "Let us keep Diwali holding it close to our hearts for its meaning never ends and its spirit is the warmth and joy of remembering friend.",
    "May the diyas light lead you onto the road of growth and prosperity. Happy Diwali!",
    "May Goddess Lakshmi top up your life with peace, Joy, serenity, felicity and bring utmost rejoice in your life. May you always be blessed. Wish you a jovial Diwali.",
    "Let the flame of the candles and the earthen lamp cleanse your heart, mind, and soul. thereby enriching your connection with the almighty. Wish you a joyful celebration of the festival. Happy Diwali.",
    "May the joy, cheer, mirth and merriment of this divine festival surround you forever. May the happiness that this season brings",
    "Sending forth the most warm wishes for you and your dear ones. I hope this Diwali makes a fascinating addition of luxuries to your life.",
    "Deepo se jagmag hai sara sansar, Aaya hai umeedon bhara tyoharon. Diwali ki hardik shubhkamnaen.",
    "Prajwalit hain deep hazaar, Diwali Lekar aayi hai Khushiyon Ki Bahar. Prakash ke tyohar ki aapko Hardik shubhkamnaye Diwali. Happy Diwali",
    "Wishing the goodness of this festive season dwells within you and stays throughout the year. Happy Diwali!!",
  ];

  const [selectedTheme, setSelectedTheme] = useState(0);
  const [selectedQuote, setSelectedQuote] = useState(0);
  const [userName, setUserName] = useState("");
  const [createCard, setCreateCard] = useState(false);

  const decideBackground = () => {
    switch (theme - 1) {
      case 0:
        return "bg-[#760229]";
      case 1:
        return "bg-[#1F2D6A]";
      case 2:
        return "bg-[#044E4F]";
      case 3:
        return "bg-[#351C70]";
    }
  };

  const decideTextColor = () => {
    switch (theme - 1) {
      case 0:
        return "text-red01";
      case 1:
        return "text-blue01";
      case 2:
        return "text-green01";
      case 3:
        return "text-pink01";
    }
  };

  useEffect(() => {
    createCard
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [createCard]);

  const shareCard = async () => {
    const shareData = {
      title:
        "Celebrate the festival of lights online with free, personalized diwali e-cards.",
      text: `This diwali, ${userName} has got something special for you. Click to view 👉 https://diwalicard.vercel.app?theme=${
        selectedTheme + 1
      }&name=${userName}&quote=${selectedQuote + 1}`,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {}
  };

  const shareApp = async () => {
    const shareData = {
      title:
        "Celebrate the festival of lights online with free, personalized diwali e-cards.",
      text: `Celebrate the festival of lights online with free, personalized diwali e-cards. Create your personalized card now 👉 https://diwalicard.vercel.app`,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {}
  };

  return (
    <div className={`h-screen overflow-hidden w-screen ${decideBackground()}`}>
      <Head>
        <link
          rel="apple-touch-icon"
          href="https://diwalicard.vercel.app/preview/favicon.png"
        ></link>
        <link
          rel="icon"
          href="https://diwalicard.vercel.app/preview/favicon.png"
          type="image/x-icon"
        />
        <title>
          {userName
            ? `${userName} wish's you a very happy diwali.`
            : `An elegant e-card to send your warm Diwali wishes to your dear ones.`}
        </title>
        <meta name="theme-color" content={themeMeta[theme - 1]} />
        <meta
          name="description"
          content={`Celebrate the festival of lights online with free, personalized diwali e-cards. Perfect for wishing your friends and family A bright and prosperous year`}
        />
        <meta
          name="keywords"
          content="diwali, message, confession, crush, love, card, link, share, webapp, app, website, tools"
        />
        <meta name="author" content="Priyangsu Banerjee" />
        <meta property="og:title" content="This diwali, E-diwali" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://diwalicard.vercel.app/preview/ogimage.png"
        />
        <meta property="og:url" content="https://diwalicard.vercel.app" />
        <meta property="og:image:type" content="image/png" />
      </Head>

      <img
        src={lanterns[theme - 1]}
        className="fixed w-12 left-6 top-0 animate-wiggle transition-all pointer-events-none z-20"
        alt=""
      />
      <img
        src={lanterns[theme - 1]}
        className="fixed w-20 left-16 top-0 animate-wiggle_left transition-all pointer-events-none z-20"
        alt=""
      />

      <img
        src={rangolis[theme - 1]}
        className="fixed -right-20 -top-16 animate-spin-slow transition-all pointer-events-none z-20 w-56"
        alt=""
      />
      <img
        src={rangolis[theme - 1]}
        className="fixed -left-20 -bottom-16 animate-spin-slow transition-all pointer-events-none z-20 w-56"
        alt=""
      />

      <button
        onClick={() => shareApp()}
        className="fixed active:scale-90 transition-all duration-300 z-[60] right-6 top-6 h-8 w-8 bg-black/60 text-white flex items-center justify-center rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      </button>
      <div className="fixed z-40 inset-x-0 bottom-0 select-none  flex items-center justify-center">
        <button
          onClick={() => setCreateCard(true)}
          className="active:scale-90 overflow-hidden transition-all"
        >
          <img
            src={buttons[theme - 1]}
            className="pointer-events-none "
            alt=""
          />
        </button>
      </div>
      <div className="fixed inset-0 h-screen w-screen z-30 flex flex-col items-center justify-center px-8">
        <div className="flex flex-col items-center justify-center -mt-16">
          <h2 className="text-white/90 font-greatVibes text-lg">{name}</h2>
          <h1 className="font-poppins text-white font-bold text-5xl mt-6">
            happy
            <span className={`relative ${decideTextColor()}`}>
              diwali
              <div className="absolute -top-[60px] -right-[29px]">
                <span className="relative inline-flex">
                  <span className="flex items-center justify-center absolute h-20 w-20 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/5 opacity-75 duration-1000 transition-all"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                </span>
              </div>
            </span>
          </h1>
          <p className="text-center text-white/90 text-sm leading-6 mt-7">
            <btn className="rotate-0 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-quote"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </btn>
            {quotes[quote]}
            <btn className="rotate-180 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-quote"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </btn>
          </p>
        </div>
      </div>
      <Fade when={createCard}>
        {createCard && (
          <div
            className={`fixed inset-0 h-screen w-screen z-[70] ${decideBackground()} overflow-auto flex flex-col`}
          >
            <div className="px-5 mt-5 flex">
              <button
                onClick={() => {
                  setCreateCard(false);
                  setUserName("");
                  setSelectedQuote(0);
                  setSelectedTheme(0);
                }}
                className="text-white ml-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-5">
              <div className="space-y-2">
                <label
                  htmlFor=""
                  className="font-poppins text-sm font-semibold text-zinc-200"
                >
                  Enter your name
                </label>
                <div className="bg-black/20 p-3 rounded-lg">
                  <input
                    type="text"
                    placeholder="Ex: The Rock"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="bg-transparent text-white placeholder:text-white/30 w-full outline-none"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="space-y-2 mt-8">
                <label
                  htmlFor=""
                  className="font-poppins text-sm font-semibold text-zinc-200"
                >
                  Select quote
                </label>
                <div className="overflow-auto flex space-x-4 pb-5">
                  {quotes.map((quote, i) => {
                    return (
                      <button
                        onClick={() => setSelectedQuote(i)}
                        key={i}
                        className={`text-sm p-4 border ${
                          selectedQuote == i
                            ? "bg-white text-zinc-900 border-white"
                            : "text-zinc-300 bg-zinc-800/20 border-transparent"
                        }  border-white/10 rounded-lg shadow-lg shrink-0 w-[300px] active:scale-90 transition-all duration-400`}
                      >
                        <p className="leading-6">{quote}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-2 mt-8">
                <label
                  htmlFor=""
                  className="font-poppins text-sm font-semibold text-zinc-200"
                >
                  Select theme
                </label>
                <div className="overflow-auto flex space-x-4 snap-x snap-mandatory pr-16">
                  {themes.map((theme, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedTheme(i)}
                        className={`relative h-60 w-32 overflow-hidden rounded-xl shrink-0 border active:scale-90 transition-all duration-300 ${
                          selectedTheme == i
                            ? "border-white"
                            : "border-white/30"
                        } snap-center`}
                      >
                        {selectedTheme == i && (
                          <span className="text-white absolute right-3 top-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-7 h-7"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                        <img src={theme} alt="" />
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="mt-16 px-5">
                <button
                  onClick={() => shareCard()}
                  disabled={userName.length == 0}
                  className="bg-white disabled:opacity-50 p-3 text-center font-medium w-full active:scale-90 transition-all duration-300 rounded-lg shadow-2xl shadow-black/50"
                >
                  Share your personalized card
                </button>
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <button className="active:scale-90 transition-all duration-300 flex items-center space-x-2 bg-black/20 text-white py-3 px-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                    <span className="font-poppins text-xs">Copy card link</span>
                  </button>
                  <button className="active:scale-90 transition-all duration-300 flex items-center space-x-2 bg-black/20 text-white py-3 px-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    <span className="font-poppins text-xs whitespace-nowrap">
                      Share as tweet
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-white/80 mt-16 pt-10 mb-20 border-t border-zinc-900/10">
              Crafted with &hearts; by{" "}
              <a
                href="https://priyangsubanerjee.vercel.app"
                className="underline"
                rel="noopener noreferrer"
              >
                Priyangsu Banerjee
              </a>
            </div>
          </div>
        )}
      </Fade>
    </div>
  );
}
