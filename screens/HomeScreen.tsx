import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ItemCard from "./ItemCard";
import { ImageBackground } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppAction } from "../redux/actions";
import { IAppState } from "../redux/store";

const image = { uri: 'https://belmontstudios.com/wp-content/uploads/marble-with-gold-gold-marble-by-blue-gold-marble-background-gold-marble-wallpaper-uk.jpg' };




const HomeScreen: React.FC<any> = (props: any) => {

  let temp: any = [];
  let tempStruct = {};
  const navigation = useNavigation<any>();


  const dispatch = useDispatch();
  useEffect(() => {grabMerchData()}, [])
  

  const body = useSelector((state: IAppState) => state.merchandise);


  const grabMerchData = async () => {

    const response : any = await axios.get('https://wi6pqlczjk.execute-api.us-east-1.amazonaws.com/StageZero/merch')

      dispatch({
        type: AppAction.SET_MERCHANDISE,
        payload: {
          merchandise : response.data
        }
      })
  }


  return (

    <View style={styles.viewContainer}>
      <ImageBackground source={image} resizeMode="cover" style={{ justifyContent: 'center', flex: 1 }}
      >
        <Text style={styles.welcomeText}>Fashion Cubed</Text>
        <Text style={styles.hotStuff}>Summer Merch</Text>

        <FlatList
          data={body}
          renderItem={({ item }) => <ItemCard data={item}  > </ItemCard>}
        />


      </ImageBackground>
    </View>

  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  welcomeText: {
    fontSize: 33,
    fontStyle: 'italic',
    fontFamily: 'sans-serif',
    paddingLeft: 19
  },
  hotStuff: {
    fontSize: 23,
    alignContent: 'stretch',
    fontStyle: 'normal',
    paddingLeft: 19
  },
  headerText: {
    fontSize: 28,
    fontStyle: 'italic',
  },
  outerMostView: {

  },
  headContainer: {
    alignItems: 'flex-start',
  }
})


