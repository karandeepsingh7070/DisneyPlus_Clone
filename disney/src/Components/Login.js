import styled from "styled-components"

const Login = (props) => {
    return (<Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt="Brands" />
                <SignUp>Get All There</SignUp>
                <Description> Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="Brands" />
            </CTA>
            <BgImage />
        </Content>
    </Container>)
}
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction:column;
height:100vh;
text-align:center;
`
const Content = styled.div`
margin-bottom:10vw;
width:100%;
position: relative;
min-height:100vh;
box-sizing: border-box;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`
const BgImage = styled.div`
background-image: url("/images/login-background.jpg");
height:100%;
width:100%;
background-position:top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
right:0;
left:0;
z-index: -1;
`
const CTA = styled.div`
max-width:650px;
width: 100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
margin-bottom: 2vw
`
const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
margin: 0 auto 2vw auto;
`
const CTALogoTwo = styled.img`
max-width:600px;
margin-bottom: 20px;
width: 100%;
`

const SignUp = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
width:92%;
padding:16px 0;
font-size:18px;
letter-spacing: 1.5px;
border-radius:5px;
pointer:cursor;

&:hover {
    background-color: #0483ee;
}
`
const Description = styled.p`
color: #f9f9f9;
font-size: 11px;
width: 92%;
margin-top:24px;
line-height: 1.5;
letter-spacing: 1px
`


export default Login;