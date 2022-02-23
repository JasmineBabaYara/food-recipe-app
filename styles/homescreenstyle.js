import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homecontainer: {
        width:'100%',
        height:'100%',
        display:'flex',
        marginTop:60
    },

    homefirstsection:{
        marginLeft:20
    },

    homeintro:{
        flexDirection:'column',
    },

    homeintrotext:{
        fontSize:25,
        fontWeight:'bold',
        color:'#ff8c00',
        marginTop:10
    },

    homeintrotext2:{
        fontSize:15,
        color:'grey',
        marginTop:5
    },

    seerecipescontainer:{
        backgroundColor:'#FFD580',
        width:'90%',
        height:'15%',
        marginTop:20,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center'
    },

    recipeimgcontainer:{
        width:80,
        height:80,
        marginLeft:10
    },
    
    recipeimg:{
        width:80,
        height:80
    },

    seerecipetextcontainer:{
        flex:1,
        paddingVertical:10,
        marginLeft:10
    },

    seerecipetext:{
        width:'68%'
    },

    seerecipetext2:{
        color:'#ff8c00',
        textDecorationLine:'underline',
        marginTop:8
    },

    trendingrecipe:{
        fontSize:22,
        color:'#000',
        marginTop:22,
        fontWeight:'bold',
    },

    categorycontainer:{
        flexDirection:'row',
        marginLeft:10,
        padding:5,
        marginTop:-30,
        justifyContent:'space-between'
    },

    categorytext:{
        fontWeight:'bold',
        fontSize:20,
    },

    categorytext2:{
        color:'grey',
    },

    foodcategorymain:{
        flexDirection:'column',
        marginLeft:14,
        //justifyContent:'space-evenly'
    },

    foodcategory:{
        backgroundColor:'rgba(128, 128, 128, 0.05)',
        flexDirection:'row',
        width:'95%',
        height:'13.3%',
        borderRadius:20,
        marginTop:10
    },

    foodimgcontainer:{
        width: 100,
        height:100,
    },

    foodimg:{
        width:100,
        height:100,
        borderRadius:20,
        marginLeft:10,
        marginTop:4
    },

    foodtextcontainer:{
        flex:1,
        paddingVertical:10,
        marginLeft:30
    },

    foodtext:{
        fontSize:20,
        fontWeight:'900',
        width:'80%',
    },

    foodtext2:{
        color:'grey',
        // marginTop:30,
        position:'absolute',
        bottom:'8%'
    },

    
    
})

export default styles;