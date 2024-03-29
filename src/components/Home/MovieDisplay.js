import MovieList from "./MovieList/MovieList";
import { useNavigate } from "react-router-dom";
import image from "../../images/imagess.jpg";
import classes from "./MovieDisplay.module.css";

const MovieDisplay = () => {
    const navigate = useNavigate();
    const navigateHandler = () => navigate("/play");

    return (
        <div className={classes.outer}>
            <img src={image} className={classes.image} alt="" />
            <div className={classes.container}>
                <img src="https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVtW_oCqsUOcBMnVIIqqN-vwn37Of5Mmz6f5RC8VlX_C2wygsx0ZAbqZSSat1r8ewhDTSuPW1KfC2sxjBom8sOztJRjoNV9nVfpBk4dbCQSgqOBypTzGP-IiAFU-mfYVGNTYMSV5BXINCxWt3daa_2yVbF-JSuaVMcSq_VcTh0nuFyj5CnxkDQ.webp?r=895" alt="" />
                <p className={classes.text}>Watch Season 4 now</p>
                <p className={classes.font}>In this animated fantasy adventure series, two humans and an elf try to stop a war between their kingdoms.</p>
                <div className={classes.buttons}>
                    <button className={classes.btn} onClick={navigateHandler}>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                        </svg>
                        <span>Play</span>
                    </button>
                    <button className={classes.btn2}>
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                        </svg>
                        <span>More Info</span>
                    </button>
                </div>
            </div>

            <MovieList />
        </div>
    );
}

export default MovieDisplay;
