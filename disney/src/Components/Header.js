import { useEffect } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { auth, provider } from "../firebase"
import { useHistory } from "react-router-dom"
import { setUserLoginDetails, selectUserName, selectUserPhoto, selectUserEmail, setSignOutState } from "../features/user/userSlice"

const Header = (props) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
            setUser(user)
            history.push("/home")
        }
      })
    }, [userName])

    // Authentication
    const handleAuth = () => {
        if (!userName) {
        auth.signInWithPopup(provider).then((result) => {
            setUser(result.user)
        }).catch((error) => {
            console.log(error.message)
        })} else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push("/")
            }).catch((err)=> {alert(err.message)})
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo:user.photoURL
        }))
    }

    return <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="Disney" />
        </Logo>

        {
            !userName? 
            <Login onClick={handleAuth} >LOGIN</Login>
            : <>
             
        <NavMenu>
            <a href="/home">
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
            </a>
            <a href="/Search">
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
            </a>
            <a href="/Watchlist">
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
            </a>
            <a href="/Originals">
                <img src="/images/original-icon.svg" />
                <span>ORIGINALS</span>
            </a>
            <a href="/Movies">
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
            </a>
            <a href="/Series">
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <SignOut>
        <UserImg src={userPhoto} alt={userName} />
        <DropDown>
            <span onClick={handleAuth}>Sign out</span>
        </DropDown>
        </SignOut>
        </>}
        {/* <Login onClick={handleAuth}>LOGIN</Login> */}
    </Nav>
}

const Nav = styled.div`
height: 70px;
position: fixed;
background-color: #090b13;
top: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 36px;
z-index: 5;
`
const Logo = styled.a`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
img {
    display:block;
    width:100%
}
`

const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right: auto;
margin-left: 24px;
height:100%;
position: relative;
letter-spacing: 2px;

a {
    display:flex;
    padding:0 12px;
    align-items:center;
    img {
        height:20px;
        width:20px;
        min-width:20px;
    }
    span {
    color: #f9f9f9;
    font-size: 13px;
    position: relative;
    padding: 2px 2px;

    &::before {
content: "";
background-color: #f9f9f9;
border-radius: 0 0 4px 4px;
bottom: -6px;
height: 2px;
left:0;
right: 0;
opacity: 0;
position: absolute;
transform-origin: left center;
transform: scaleX(0);
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.9) 0s;
visibility: hidden;
width:auto;
}
}
&:hover {
    span::before {
    transform: scaleX(1);
    visibility: visible;
    opacity: 1 !important;
    }
}


@media (max-width: 768px) {
    display:none;
}
}
`

const Login = styled.a`
background-color: rgb(0,0,0,0.6);
padding: 8px 16px;
letter-spacing: 2px;
border: 1px solid #f9f9f9;
border-radius: 5px;
transition: all 0.2s ease-out;

&:hover {
    background-color: #f9f9f9;
    color: rgb(0,0,0,0.6);
    font-weight: bold;
}
`

const UserImg = styled.img`
height:100%;
`

const DropDown = styled.div`
position: absolute;
top: 70px;
right: 0px;
background: rgb(19,19,19);
border: 1px solid rgba(251,251,251,0.34);
border-radius: 4px;
box-shadow: rgba(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
width: 100%;
opacity: 0;
cursor: pointer;
`

const SignOut = styled.div`
position: relative;
display: flex;
width:100px;
height: 100px;
align-items: center;
justify-content: center;

${UserImg} {
border-radius: 50%;
width: 48px;
height: 48px;
}

&:hover {
    ${DropDown} {
        opacity: 1;
        transition-duration: 0.5s;
    }
}
`

export default Header;