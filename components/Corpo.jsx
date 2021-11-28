import React, {Component} from 'react'
import {View,Image} from 'react-native'

export default class Corpo extends Component{
    render(){

        let figura = {uri:'https://lh3.googleusercontent.com/-zE_0-UauJtU/YAGlUYzA9tI/AAAAAAAAABY/UT41wKqEINA5D9Z0lohr1vdSkNlkzfP3gCEwYBhgLKtQDABHVOhxCJwiJ8NW8eUmurmR-emx-z_zWyZYDVgW3Uyssz03O9GWo_8XtVuwoCeSN_7M7vOCZGdzwQlTUu1XptObQDc5YRnOXiWx81wWfnCoi-tli3jjMgq6Lh_2ounH0hsWpMPEaUhNZ89yFJ3XUE8Eg4BF4eNJbGc_nVq_bqsSviSeGBygSNs7sdQX-Xnn_poR0yMZYsiDwpsoe746UCCDSMvIVmFxsrhVPthXpQK1V2Sbn3HdVcebYFahWaen8nt1RZf-8WpxSbGOhX8vhnyh1gAN_bEvICStqlp_7kn1CuhdoGwltmoVf5iX2U-yrhrlNY1TObqzmlpMEOu9mf2RIx_7Srw6fwWxT7BDOMigX7yy9c0RI4kVNH1ZtFG1TilcFXofE0zPYArwFJtvu9EG3ZcFvWXHRsvBwzW6ObXoRYCjD2BV7IEMxyJOM7m390pI3rK1kW8kFWD9XABvHpXW3td--Ksh0lsubGtCPSL_gXPtZ8Y64_8DihDfEYzgrDUgk9vzAZl5RC1suyo-G3thPNhaajR5D8SaYcdXa4fCmCjJczowrb1GNA2EdpIGsq6ymUYOtbQkeuvtOnNKv093BnzCgzuHnMzshnLSdVwGN6lM0MLvF5IsG/w140-h140-p/20155988_1302159029910173_8087735751357800063_n.png'}

        return (
            <Image
                source={figura}
                style={{width:150, height:150}}
            />
        )
    }
}