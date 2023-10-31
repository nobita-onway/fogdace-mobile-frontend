import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS, ROUNDED } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        position: 'relative',
        height: '100%',
    },
    bgImage: {
        height: 130,
        borderRadius: 15,
        width: '100%',
        zIndex: -1,
    },
    textContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
        maxWidth: '85%'
    },
    textName: {
        fontSize: 19,
        letterSpacing: 0.1,
        fontFamily: FONTS.bold,
        color: 'black',
    },
    textPhone: {
        fontSize: 15,
        paddingTop: 6,
        fontFamily: FONTS.regular,
        color: 'black',
    },
    textAddress: {
        fontFamily: FONTS.regular,
        color: COLORS.slategray,
        paddingTop: 10,
    },
    editImage: {
        width: 34,
        height: 33,
        right: 20,
        bottom: 20,
        position: 'absolute',

    },
    headerText: {
        fontSize: 19,
        letterSpacing: 0.1,
        fontFamily: FONTS.bold,
        color: 'black',
        paddingTop: 20,
    },
    hcmText: {
        fontSize: 15,
        letterSpacing: 0.1,
        fontFamily: FONTS.bold,
        color: 'black',
        paddingTop: 21,
    },
    wrapperShip: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    flatRate: {
        color: COLORS.green,
        fontSize: 14,
        letterSpacing: 0.1,
        fontFamily: FONTS.medium,
    },
    priceShip: {
        fontSize: 17,
        letterSpacing: 0.1,
        fontFamily: FONTS.bold,
        color: 'black',
    },
    wrapperPayment: {
        backgroundColor: COLORS.primaryOrder,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: COLORS.orange,
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 11,
        marginTop: 20,
    },
    wrapperPaymentImg: {
        backgroundColor: COLORS.white,
        borderRadius: 6,
        padding: 5,
    },
    paymentImg: {
        width: 30,
        height: 30,
    },
    paymentText: {
        fontSize: 15,
        letterSpacing: 0.1,
        fontFamily: FONTS.bold,
        color: 'black',
    },
    wrapperSummary: {
        backgroundColor: COLORS.primaryOrder,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'col',
        gap: 12,
        paddingHorizontal: 20,
        paddingVertical: 24,
        marginTop: 21,
    },
    wrapperCount: {
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceText: {
        fontFamily: FONTS.medium,
        color: COLORS.slategray,
        letterSpacing: 0.1,
    },
    price: {
        fontFamily: FONTS.medium,
        color: '#292d41',
        letterSpacing: 0.1,
    },
    wrapperTotal: {
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:10,
    },
    totalText: {
        fontSize:20,
        fontFamily: FONTS.bold,
        color: COLORS.black,
        letterSpacing: 0.1,
    },
    totalPrice: {
        fontSize:20,
        fontFamily: FONTS.bold,
        color: COLORS.black,
        letterSpacing: 0.1,
    },

    wrapperNote: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.lightGray,
        borderWidth: 1,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'col',
        gap: 15,
        paddingHorizontal: 20,
        paddingVertical: 24,
        marginTop: 21,
        marginBottom: 100,
    },
    wrapperNoteText: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    noteImage: {
        width: 18,
        height: 17,
    },
    noteTextHeader: {
        fontFamily: FONTS.bold,
        color: COLORS.slategray,
        fontSize: 16,
        letterSpacing: 0.1,
    },
    noteText: {
        paddingTop: 6,
        fontFamily: FONTS.medium,
        color: COLORS.slategray,
        letterSpacing: 0.1,
    },
    bottomCheckout: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
    },
    button: {
        backgroundColor: COLORS.slightOrange,
        height: 44,
        marginHorizontal: 18,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCheckout: {
        fontFamily: FONTS.bold,
        fontSize: 14,
        color: COLORS.white,
    },
});

export default styles;
