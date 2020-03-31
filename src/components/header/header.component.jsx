import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/original.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles'

const Header = ( {currentUser, hidden} ) => (
    <HeaderContainer>
        <LogoContainer className='logo-container' to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer >
        <OptionLink to='/shop'>
            SHOP
        </OptionLink>
        <OptionLink to='/contact'>
        CONTACT
        </OptionLink>
        {
            currentUser ?
            <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
            :
            <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null :
            <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps  = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps, null)(Header)