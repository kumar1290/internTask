const eventsTable = require('../models/events')
const createEvent = async (req, res)=>{
    const { createdBy, title, desc   } = req.body;
    const newEvent = new eventsTable({
      createdBy,
      title,
      desc,
    });
    try {
    await newEvent.save();
    } catch (err) {
      return next(err) ;
    }
    res.json(newEvent);
}

const readEvent = () => {

}

const cancelEvent = ()=>{

}
const updateEvent = ()=>{

}
const joinEvent = ()=>{

}

const obj = {createEvent,readEvent,cancelEvent,updateEvent,joinEvent} ;

module.exports = obj ;