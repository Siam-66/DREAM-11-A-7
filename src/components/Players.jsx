import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

import Player from "./Player";
import './Players.css';

const Players = ({ coins, setCoins }) => {
    const [players, setPlayers] = useState([]);
    const [chosenPlayers, setChosenPlayers] = useState(new Set());
    const [view, setView] = useState("available");

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(setPlayers)
            .catch(error => console.error("Error while loading players:", error));
    }, []);

    const handlePlayerChosen = (player) => {
        const { id, name, price } = player;

        if (chosenPlayers.has(id)) {
            return toast.error(`${name} has already been selected!`);
        }
        if (chosenPlayers.size >= 6) {
            return toast.error("You can only select up to 6 players.");
        }
        if (coins < price) {
            return toast.error("Not enough coin. Please claim some coin.");
        }

        setCoins(coins - price);
        setChosenPlayers(new Set(chosenPlayers).add(id));
        toast.success(`${name} has been chosen!`);
    };

    const handlePlayerRemove = (player) => {
        const { id, name, price } = player;

        setChosenPlayers(prev => {
            const updatedSet = new Set(prev);
            updatedSet.delete(id);
            return updatedSet;
        });
        setCoins(coins + price);
        toast.success(`${name} has been removed from your dream team.`);
    };

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center my-12">
                <h1 className="text-2xl font-semibold">
                    {view === "available" ? "Available Players" : `Selected Players (${chosenPlayers.size} / 6)`}
                </h1>
                <div className="flex gap-4 w-2/3 sm:w-auto flex-col sm:flex-row mt-4 sm:mt-0">
                    <button
                        onClick={() => setView("available")}
                        className={`btn text-xl ${view === "available" ? "bg-gradient-to-r from-pink-400 to-yellow-300  text-white" : "btn-outline"}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setView("selected")}
                        className={`btn text-xl ${view === "selected" ? "bg-gradient-to-r from-pink-400 to-yellow-300 text-white" : "btn-outline"}`}
                    >
                        Selected ({chosenPlayers.size})
                    </button>
                </div>
            </div>

            <div className={`my-24 ${view === "available" ? "player-container" : ""}`}>
                {view === "available" ? (
                    players.map(player => (
                        <Player key={player.id} player={player}
                            onSelect={handlePlayerChosen}
                            isSelected={chosenPlayers.has(player.id)}
                        />
                    ))
                ) : (
                    <>
                        {Array.from(chosenPlayers).map(playerId => {
                            const player = players.find(p => p.id === playerId);
                            return player && (
                                <div key={player.id} className="selected-player bg-gray-100 rounded-lg flex justify-between items-center p-5 mb-5 border border-gray-300">
                                    <div className="flex items-center gap-5">
                                        <img className="h-32 w-40 object-cover rounded-lg" src={player.image} alt={player.name} />
                                        <div>
                                            <p className="font-semibold">{player.name}</p>
                                            <p>{player.role}</p>
                                            <p>Price: ${player.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handlePlayerRemove(player)} className=" hover:text-red-700 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                                    </button>
                                </div>
                            );
                        })}
                        <button onClick={() => setView("available")} className="btn bg-gradient-to-r from-pink-400 to-yellow-300 text-white mt-4">
                            Add More Players
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

Players.propTypes = {
    coins: PropTypes.number.isRequired,
    setCoins: PropTypes.func.isRequired
};

export default Players;
