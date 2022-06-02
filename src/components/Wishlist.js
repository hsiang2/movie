import React from "react";
import { FlatList, HStack, Text, useColorMode } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign"
import { useSelector } from "react-redux";
import { selectWatchlist } from "../redux/accountSlice";
import WishlistDetail from "./WishlistDetail";


const Wishlist = ({data, navigation}) => {
    const {colorMode} = useColorMode();
    const watchlist = useSelector(selectWatchlist);
    const renderItem = ({item}) => (<WishlistDetail movie={item} navigation={navigation}/>)
    return(
        <>
            <HStack 
                px={28}
                alignItems="center" justifyContent="space-between"
            >
                <Text 
                    _dark={{color: "#F4F4F4"}}
                    _light={{color: "#445B6C"}}
                    fontSize={20}
                    letterSpacing={0.2}
                >
                    我的片單
                </Text>
                <AntDesign name="right" color= {colorMode =="dark"?"#F4F4F4":"#445B6C"} size={20}/>
                
            </HStack>
            <FlatList 
                horizontal={true}
                data={watchlist}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginLeft: 24, marginTop: 25, marginBottom: 40, paddingRight: 24
                }}
            />
        </>
    );
};

export default Wishlist;