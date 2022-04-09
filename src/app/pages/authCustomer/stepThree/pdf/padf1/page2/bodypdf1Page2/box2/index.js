import React from 'react';

import {
    Page,
    View,
    Document,
    StyleSheet,
    Font,
    Image,
    Text,
  } from "@react-pdf/renderer";

  const stylePdf = StyleSheet.create({
    main: {
        width:'40%',
        height:'220px',
        border:'1px solid black'
    },
    topBox:{
        width:'100%',
        height:'50%',
        fontSize:7.5,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingRight:5,
        position:'relative',
    },
    bottomBox:{
        width:'100%',
        height:'50%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-end',
        fontSize:7.5,
        paddingRight:5,
        borderBottom:'1px solid black',
        position:'relative'
    },
    position:{
        position:'absolute',
        bottom:15,
        left:15
    }
  });
  

const Pdf1Page2Box2 = () => {
    return ( 
        <View style={stylePdf.main}>
            <View style={stylePdf.bottomBox}>
                <Text>نام و نام خانوادگی شخص حقیقی و کد ملی:</Text>
                <Text>شماره شناسنامه:</Text>
            </View>
            <View style={stylePdf.topBox}>
                <Text>اصالتا:</Text>
                <Text>وکالتا:</Text>
                <Text>ولایتا:</Text>
                <Text style={stylePdf.position}>محل امضاء</Text>
            </View>
        </View>
    );
}
 
export default Pdf1Page2Box2;