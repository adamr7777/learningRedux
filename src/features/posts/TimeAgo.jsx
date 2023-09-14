import {parseISO, formatDistanceToNow} from 'date-fns';


export default function TimeAgo({time}) {
    if(!time) return;
    const date = parseISO(time);
    const timeAgo = `${formatDistanceToNow(date)} ago`;

    return (
        <span title={time}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    );
}; 