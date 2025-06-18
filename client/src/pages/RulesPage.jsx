import React from "react";
import Layout from "../Components/Layout/Layout";

const RulesPage = () => {
  return (
    <Layout>
      <div className="w-full mx-auto px-10 py-6 text-gray-100 bg-gray-900 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-6">
          How to Play
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">
            🎮 Game Flow
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-100 text-base leading-relaxed">
            <li>
              <strong>Join the Game:</strong> Log in or sign up to start
              betting. By default,{" "}
              <span className="font-semibold">50 coins</span> are credited to
              your account. Make sure you have sufficient balance before placing
              a bet.
            </li>
            <li>
              <strong>Observe the Timer:</strong> Each round lasts{" "}
              <span className="font-semibold">2 minutes</span>. The countdown is
              visible at the top.
            </li>
            <li>
              <strong>Select a Color:</strong> Choose one of three colors —{" "}
              <span className="text-red-600 font-semibold">Red</span>,{" "}
              <span className="text-blue-600 font-semibold">Blue</span>, or{" "}
              <span className="text-green-600 font-semibold">Green</span>.
            </li>
            <li>
              <strong>Place Your Bet:</strong> Enter your desired stake and
              confirm your selection{" "}
              <span className="font-semibold">before the timer hits zero</span>.
            </li>
            <li>
              <strong>Wait for Result:</strong> When the round ends, a winning
              color is randomly selected — visible to all players at the same
              time.
            </li>
            <li>
              <strong>Check Outcome:</strong> If your chosen color matches the
              winning one, you will receive{" "}
              <span className="font-semibold">2x your stake</span> as winnings.
            </li>
            <li>
              <strong>Next Round Starts Automatically:</strong> The game
              continues seamlessly every 2 minutes. Place a new bet or sit out
              as you like.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h3 className="text-lg font-semibold text-yellow-500 mb-1">
            Important Note
          </h3>
          <p className="text-md text-gray-100 leading-relaxed">
            If no player places a bet during a round, the game will skip
            generating a winning color for that round. As a result, such rounds
            will not appear in the round history or be considered for payouts.
          </p>
        </section>


        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-yellow-500">
            🎯 Winning Chance
          </h2>
          <p className="text-gray-100 mb-4">
            Each round, a winning color is randomly selected with equal
            probability. Your chance of winning depends only on your color
            choice and a bit of luck:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="border rounded-lg p-4 shadow-sm bg-red-100">
              <h3 className="text-lg font-semibold text-red-600 mb-1">Red</h3>
              <p className="text-sm text-gray-800">
                Chance: <strong>33.33%</strong>
              </p>
              <p className="text-sm text-gray-800">
                Payout: <strong>2x</strong>
              </p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm bg-blue-100">
              <h3 className="text-lg font-semibold text-blue-600 mb-1">Blue</h3>
              <p className="text-sm text-gray-800">
                Chance: <strong>33.33%</strong>
              </p>
              <p className="text-sm text-gray-800">
                Payout: <strong>2x</strong>
              </p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm bg-green-100">
              <h3 className="text-lg font-semibold text-green-600 mb-1">
                Green
              </h3>
              <p className="text-sm text-gray-800">
                Chance: <strong>33.33%</strong>
              </p>
              <p className="text-sm text-gray-800">
                Payout: <strong>2x</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-yellow-500">
            ⚠️ Disclaimer
          </h2>
          <p>
            This game is for entertainment and educational purposes only. Make
            sure you understand the rules before playing.
          </p>
        </section>


      </div>
    </Layout>
  );
};

export default RulesPage;
