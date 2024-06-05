import { ChevronLeftIcon, ChevronRightIcon } from "~/components/Icons";
import "./_custom_arrow.scss";

export const SampleNextArrow = ({ className, style, onClick }) => {
    console.log(style);
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", color: 'black !important', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', right: '-18px', width: '34px', height: '34px', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', }}
            onClick={onClick}
        />
    );
}

export const SamplePrevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", color: 'black !important', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', left: '-16px', zIndex: '2', width: '34px', height: '34px', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', }}
            onClick={onClick}
        />
    );
}

// export const SampleNextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
        
//         <div
//             className={`${className} custom__next__arrow`}
//             style={{...style}}
//         >
//             <ChevronRightIcon />
//         </div>
//     );
// }