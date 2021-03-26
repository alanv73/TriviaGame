import sizes from './sizes';
export default {
    gameContent: {
        width: '80%',
        paddingBottom: '50px',
    },
    cardBoundary: {
        width: '40%',
        margin: '0px auto',
        marginTop: '50px',
        position: 'relative',
        transition: 'transform 1s',
        transformStyle: 'preserve-3d',
        [sizes.down('lg')]: {
            width: '50%'
        },
        [sizes.down('md')]: {
            width: '60%'
        },
        [sizes.down('sm')]: {
            width: '70%'
        },
        [sizes.down('xs')]: {
            width: '80%'
        },
    },
    cardFront: {},
    cardBack: {
        transform: 'rotateY( 180deg )'
    },
    isFlipped: {
        transform: 'rotateY(180deg)'
    },
    cardBackground: {
        position: 'absolute',
        marginTop: '-60%',
        width: '100%',
        // height: '100%',
        padding: '1px 0',
        borderRadius: '10px',
        backgroundColor: 'rgb(19, 7, 122)',
        boxShadow: '5px 5px 15px 3px rgba(0, 0, 0, 0.61)',
        backfaceVisibility: 'hidden',
        webkitBackfaceVisibility: 'hidden',
    },
    cardBorder: {
        border: '0.4em double goldenrod',
        borderRadius: '10px',
        height: '29.5em',
        margin: '10px',
        overflow: 'hidden'
    },
    backDesign: {
        cursor: 'pointer',
        color: 'goldenrod',
        display: 'flex',
        padding: '1em',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '100%',
        "& h1": {
            marginTop: '0.5em',
            marginBottom: '0.3em',
            fontSize: '3.5em'
        },
        "& img": {
            width: '50%'
        }
    },
    backItems: {
        alignSelf: 'center',
        fontFamily: '"Great Vibes", cursive',
    },
    message: {
        fontFamily: '"Great Vibes", cursive',
        textAlign: 'center',
        fontSize: '3em'
    },
    incorrect: {
        fontFamily: '"Great Vibes", cursive',
        margin: '1em 0',
        "& h2": {
            marginTop: '0',
            marginBottom: '0',
            marginLeft: '0.5em',
            alignItems: 'flex-start',
            fontSize: '1.5em'
        },
        "& h4": {
            fontFamily: '"Raleway", sans-serif',
            marginBottom: 0,
            marginTop: 0,
            textAlign: 'center',
            fontSize: '2em'
        }
    },
    card: {
        borderRadius: '10px',
        minHeight: '97%',
        maxHeight: '97%',
        display: 'flex',
        flexDirection: 'column',
        margin: '8px',
    },
    cardHeader: {
        backgroundColor: 'white',
        boxSizing: 'border-box',
        marginBottom: '0.5em',
        borderRadius: '5px',
        paddingBottom: '5px',
        height: '26%',
        "& h1": {
            fontFamily: '"Great Vibes", cursive',
            fontSize: '2.5em',
            textAlign: 'center',
            margin: '0 10px 10px 0',
            paddingTop: '10px',
        }
    },
    category: {
        // backgroundColor: 'yellow',
        padding: '0px 20px 0px 20px',
        "& h3": {
            fontFamily: '"Raleway", sans-serif',
            fontSize: '1.2em',
            fontWeight: 'bold',
            margin: '0',
            textAlign: 'center',
            padding: '10px',
        }
    },
    cardContent: {
        fontFamily: '"Raleway", sans-serif',
        fontSize: '1em',
        padding: '0',
        borderRadius: '5px',
        backgroundColor: 'white',
        height: '20.5em',
        overflow: 'auto',
        "& p": {
            // marginTop: '0',
            margin: '20px 15px 20px 15px',
        }
    },
    choice: {
        listStyleType: 'none',
        padding: '10px 10px 10px 20px',
        cursor: 'pointer',
        borderRadius: '25px',
        margin: '0 20px',
        "&:hover": {
            fontWeight: 'bold',
            backgroundColor: '#eeeeeea4',
        }
    }
}