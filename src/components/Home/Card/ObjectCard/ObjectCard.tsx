import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCalendarWeek, faBook, faSchool, faMap, faUsers } from "@fortawesome/free-solid-svg-icons"

export const ObjectCard = [
    {
        'id':1,
        'title':"Events",
        'image':"img path",
        'icon':<FontAwesomeIcon icon={faCalendarWeek} className="hover:text-indigo-600"/>
    },
    {
        'id':2,
        'title':"Housing",
        'image':"img path",
        'icon':<FontAwesomeIcon icon={faBuilding} className="hover:text-indigo-600"/>
    },
    {
        'id':3,
        'title':"Maps",
        'image':"img path",
        'icon':<FontAwesomeIcon icon={faMap} className="hover:text-indigo-600"/>
    },
    {
        'id':4,
        'title':"Social",
        'image':"img path",
        'icon':<FontAwesomeIcon icon={faUsers} className="hover:text-indigo-600"/>
    },
    {
        'id':5,
        'title':"Library",
        'image':"img path",
        'icon':<FontAwesomeIcon icon={faBook} className="hover:text-indigo-600"/>
    },
    {
        'id':6,
        'title':"Admissions",
        'image':"img path",
        'icon':<FontAwesomeIcon icon={faSchool} className="hover:text-indigo-600"/>
    },

]