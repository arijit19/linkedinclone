import ImageIcon from "@material-ui/icons/Image";
import SuscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalanderViewDayIcon from "@material-ui/icons/CalendarViewDay";

export const FileOptionsData = [
    {
        Icon: ImageIcon,
        title: "Photo",
        color: "#70B5F9",
        type: "file",
        accept: "image/*",
        validation: {
            isImage: true
        }
    },
    {
        Icon: SuscriptionsIcon,
        title: "Video",
        color: "#E7A33E",
        type: "file",
        accept: "video/*",
        validation: {
            isVideo: true
        }
    }
]

export const LinkOptionData = [
    {
        Icon: EventNoteIcon,
        title: "Event",
        color: "#C0CBCD"
    },
    {
        Icon: CalanderViewDayIcon,
        title: "Write article",
        color: "#7FC15E"
    }
]