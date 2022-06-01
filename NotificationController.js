import Notification from "../models/notification.js";php

export const getNotif = async(req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getNotifId = async(req, res) => {
    try {
        const notifications = await Notification.findById(req.params.id);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const saveNotif = async(req, res) => {
    const notification = Notification(req.body);
    try {
        const ressave = await notification.save();
        res.status(201).json(ressave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateNotif = async(req, res) => {
    var notifId = await Notification.findById(req.params.id);
    if (!notifId) return res.status(404).json({status:false, message:"Data Not Found"});
    try {
        const ressave = await Notification.updateOne({ _id:req.params.id }, {$set:req.body});
        res.status(200).json(ressave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteNotif = async(req, res) => {
    var notifId = await Notification.findById(req.params.id);
    if (!notifId) return res.status(404).json({status:false, message:"Data Not Found"});
    try {
        const resdel = await Notification.deleteOne({ _id:req.params.id });
        res.status(200).json(resdel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}