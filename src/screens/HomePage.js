import React from 'react';
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'
import MenuIcon from '../../assets/menu_icon';
import LocationIcon from '../../assets/location_icon';
import NotificationIcon from '../../assets/notification_icon';
import ReservationIcon from '../../assets/reservation_icon';
import JoinTableIcon from '../../assets/join_table_icon';
import PreOrderIcon from '../../assets/pre_order_icon';
import PickUpIcon from '../../assets/pick_up_icon';
import DelieveryIcon from '../../assets/delievery_icon';
import CateringIcon from '../../assets/catering_icon';
import CouponsIcon from '../../assets/coupons_icon';
import OffersIcon from '../../assets/offers_icon';
import ForwardIcon from '../../assets/forward_icon';
import MacLogo from '../../assets/McDonalds_Logo';
import RateIcon from '../../assets/rate_icon';
import DiscountIcon from '../../assets/discount_icon';

const { width, height } = Dimensions.get('window');

export default function HomePage({ }) {
    return (
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '95%', height: height / 13, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <MenuIcon />
                    <View style={{ paddingHorizontal: 10 }}>
                        <LocationIcon />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <NotificationIcon />
                    <View style={{ paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/Profile-Photo.png')} />
                    </View>
                </View>
            </View>
            <ScrollView style={{ height: '90%', width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={{ width: '95%', alignItems: 'flex-start' }}>
                    <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 34, fontWeight: 'bold' }}>Discover</Text>
                </View>
                <Swiper style={{  }} height="100%" paginationStyle={{ position: 'absolute', bottom: 15, left: 0, right: 0, }} showsButtons={false}>
                    <View style={{ width: '100%', alignItems: 'center', margin: 8 }}>
                        <Image source={require('../../assets/Promo.png')} />
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', margin: 8 }}>
                        <Image source={require('../../assets/Promo2.png')} />
                    </View>
                </Swiper>
                <View style={{ width: '95%', alignItems: 'flex-start' }}>
                    <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 34, fontWeight: 'bold' }}>Categories</Text>
                </View>
                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', margin: 8 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <ReservationIcon />
                        <Text style={{ textAlign: 'center', textAlignVertical: 'bottom' }}>Reservation</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <JoinTableIcon />
                        <Text style={{ textAlign: 'center', textAlignVertical: 'bottom' }}>Join Table</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <PreOrderIcon />
                        <Text style={{ textAlign: 'center', textAlignVertical: 'bottom' }}>Pre Order</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <PickUpIcon />
                        <Text style={{ textAlign: 'center', textAlignVertical: 'bottom' }}>Pickup</Text>
                    </View>
                </View>
                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <DelieveryIcon />
                        <Text style={{ textAlign: 'center', textAlignVertical: 'bottom' }}>Delivery</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <CateringIcon />
                        <Text style={{ textAlign: 'center', textAlignVertical: 'bottom' }}>Catering</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <CouponsIcon />
                        <Text style={{ textAlign: 'center', textAlignVertical: 'bottom' }}>Coupons</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <OffersIcon />
                        <Text style={{ textAlign: 'center', textAlignVertical: 'bottom' }}>Offers</Text>
                    </View>
                </View>
                <View style={{ width: '95%', alignItems: 'flex-start' }}>
                    <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 34, fontWeight: 'bold' }}>Featured Restaurants</Text>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#C12F2F', fontSize: 12, fontWeight: 'bold' }}>Closed</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#C12F2F', fontSize: 12, fontWeight: 'bold' }}>Closed</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 34, fontWeight: 'bold' }}>Discounts</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, paddingHorizontal: 5 }}>See All</Text>
                        <ForwardIcon />
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ width: '55%', alignItems: 'center', backgroundColor: '#D80073', padding: 5, borderRadius: 20, position: 'absolute', top: '10%', left: 0, flexDirection: 'row' }}>
                            <DiscountIcon />
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#FFFFFF', paddingHorizontal: 5 }}>Discount 20% on all menu</Text>
                        </View>
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ width: '55%', alignItems: 'center', backgroundColor: '#D80073', padding: 5, borderRadius: 20, position: 'absolute', top: '10%', left: 0, flexDirection: 'row' }}>
                            <DiscountIcon />
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#FFFFFF', paddingHorizontal: 5 }}>Discount 20% on all menu</Text>
                        </View>
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ width: '55%', alignItems: 'center', backgroundColor: '#D80073', padding: 5, borderRadius: 20, position: 'absolute', top: '10%', left: 0, flexDirection: 'row' }}>
                            <DiscountIcon />
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#FFFFFF', paddingHorizontal: 5 }}>Discount 20% on all menu</Text>
                        </View>
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ width: '55%', alignItems: 'center', backgroundColor: '#D80073', padding: 5, borderRadius: 20, position: 'absolute', top: '10%', left: 0, flexDirection: 'row' }}>
                            <DiscountIcon />
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#FFFFFF', paddingHorizontal: 5 }}>Discount 20% on all menu</Text>
                        </View>
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', alignItems: 'flex-start' }}>
                    <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 34, fontWeight: 'bold' }}>New On Rescounts</Text>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 34, fontWeight: 'bold' }}>All Restaurants</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, paddingHorizontal: 5 }}>See All</Text>
                        <ForwardIcon />
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
                <View style={{ width: '95%', height: height * 0.44, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 8, margin: 8 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image source={require('../../assets/McDonalds.png')} />
                        <View style={{ position: 'absolute', bottom: '5%', left: '10%' }}>
                            <MacLogo />
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 15, fontWeight: 'bold' }}>Mcdonald's</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '28%', alignItems: 'center' }}>
                            <RateIcon />
                            <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#E9D023', fontSize: 12, fontWeight: 'bold' }}>( 5.0)</Text><Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#12950E', fontSize: 12, fontWeight: 'bold' }}>Open</Text>
                        </View>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Middle Eastern, Halal</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Avg. $20 / person</Text>
                    </View>
                    <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>Delivery: $12</Text>
                        <Text style={{ textAlign: 'left', textAlignVertical: 'center', color: '#474746', fontSize: 13 }}>9220.1 km</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}