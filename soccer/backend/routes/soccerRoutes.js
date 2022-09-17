import { addNewPlayer, getPlayers,getPlayerByFirstName, getPlayerById, updatePlayerById, deletePlayerById } from "../controllers/playerController";

const routes = (app) => {
    app.route('/players')
    //GET endpoint
    .get(getPlayers)
    //POST endpoint
    .post(addNewPlayer);

    //GET player by firstName
    app.route('/player/:firstName').get(getPlayerByFirstName);
    
    app.route('/player/:playerId')
    //GET player by id
    .get(getPlayerById)
    //UPDATE player by id
    .put(updatePlayerById)
    //DELETE player by id
    .delete(deletePlayerById);
}

export default routes;