import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, time, handleDeleteNote }) => {
    return (
      <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <small>{time}</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)}
            className='delete-icon'
             size='1.4em'
              />
        </div>
      </div>
    );
};

export default Note;