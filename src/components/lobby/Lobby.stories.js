import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

import Lobby from "./Lobby";

export default {
  component: Lobby,
  title: "Lobby",
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Lobby
    loading={boolean("Loading?", false)}
    rooms={[]}
    games={[{ name: "Kalambury", image: "", minPlayers: 0, maxPlayers: 10 }]}
    handleCreate={action("handleCreate")}
  />
);

export const WithRooms = () => (
  <Lobby
    loading={boolean("Loading?", false)}
    rooms={[
      { gameID: "qweasd1", gameName: "Kalambury", players: [{}, {}, {}], setupData: {} },
      { gameID: "qweasd2", gameName: "Kalambury", players: [{}, {}, {}], setupData: {} },
      { gameID: "qweasd3", gameName: "Kalambury", players: [{}, {}, {}], setupData: {} },
      { gameID: "qweasd4", gameName: "Kalambury", players: [{}, {}, {}], setupData: {} },
    ]}
    currentRoom={
      boolean("Is in game?", true) && {
        gameID: "qweasd0",
        gameName: "Kalambury",
        players: [
          { id: "0", name: "user-0" },
          { id: "1", name: "user-1" },
          { id: "2", name: "user-2" },
          {},
          {},
        ],
        setupData: { private: true },
      }
    }
    games={[
      {
        name: "Kalambury",
        image: "https://placeimg.com/120/120/any",
        minPlayers: 0,
        maxPlayers: 10,
      },
    ]}
    handleJoinRoom={action("handleJoinRoom")}
  />
);