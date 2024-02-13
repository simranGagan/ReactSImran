import {StyleSheet} from 'react-native';
import {Colors, Font} from '../AppTheme';
import {
  responsiveHeight as RH,
  responsiveWidth as RW,
  responsiveFontSize as RFS,
} from 'react-native-responsive-dimensions';

const ProductScreenStyles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  imageContainer: {
    width: RW(40),
    height: RH(20),
  },
  backArrowStyle: {
    width: RW(3),
    height: RH(3),
  },
  headerStyle: {
    flexDirection: 'row',
    height: RH(4),
    marginHorizontal: 10,
    alignItems: 'center',
  },
  headerTextStyle: {
    color: Colors.black,
    fontSize: RFS(2.5),
    marginStart: 10,
    fontFamily: Font.extraBoldItalic,
    alignSelf: 'center',
  },
  circleSttyle: {
    width: 30,
    height: 30,
    backgroundColor: Colors.gray,
    borderRadius: 15,
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartStyle: {
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  productImageStyle: {
    resizeMode: 'cover',
    backgroundColor: Colors.black,
    height: RH(20),
    width: RW(40),
  },
  priceViewStyle: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ProductScreenStyles;
