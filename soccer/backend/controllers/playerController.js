import { response } from "express";
import mongoose from "mongoose";
import {PlayerSchema} from '../models/playerModel';

const Player = mongoose.model('Player',PlayerSchema);

//CREATE a new player
export const addNewPlayer = (request,response) => {
    let newPlayer = new Player(request.body);
    console.log("request : " + newPlayer);
    newPlayer.save((err,data) =>{
        if(err){
            response.send(err);
        }
        console.log("Response :" + data);
        response.json(data);
    });
};

//GET all players
export const getPlayers = (request,response) => {
    Player.find({},(err,data) =>{
        if(err){
            response.send(err);
        }
        console.log("Response :" + data);
        response.json(data);
    });
};

//GET player by firstName
export const getPlayerByFirstName = (req,res) => {
    Player.find({firstName : req.params.firstName}, (err,data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    });
}

//GET player by id
export const getPlayerById = (req,res) => {
    Player.findById(req.params.playerId, (err,data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    });
}

//DELETE player by id
export const deletePlayerById = (req,res) => {
    Player.remove({_id : req.params.playerId}, (err,data) => {
        if(err){
            res.send(err);
        }
        res.json({message : 'Player deleted successfully'});
    });
}

//UPDATE player by id
export const updatePlayerById = (req,res) => {
    Player.findByIdAndUpdate(req.params.playerId,req.body,{new : true}, (err,data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    });
}