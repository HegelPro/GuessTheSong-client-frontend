export const SOCKETS = {
  lobby: {
    path: '/lobby',
    events: {
      createLobby: 'createLobby',
      getLobbyList: 'getLobbyList',
    }
  },
  game: {
    path: '/game',
    events: {
      startGame: 'startGame',
    }
  }
}

export const PORT = '5000'