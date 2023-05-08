import dayjs from "dayjs";

const output = (obj) => {
    return {
        ...obj,
        dateAndTime: obj.dateAndTime.format('DD-MM-YYYY HH:mm'),
        floor: obj.floor.value,
        meetingRoom: obj.meetingRoom.value,
    }
}

export default output;