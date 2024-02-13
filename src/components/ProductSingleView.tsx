import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import ProductScreenStyles from './ProductScreenStyles';
import {Colors, Font, Images} from '../AppTheme';
import {
  responsiveHeight as RH,
  responsiveWidth as RW,
  responsiveFontSize as RFS,
} from 'react-native-responsive-dimensions';

const ProductSingleView = (props: any) => {
  const data = props.data;

  return (
    <View>
      <View style={ProductScreenStyles.imageContainer}>
        {
          <Image
            source={Images.productItem}
            style={ProductScreenStyles.productImageStyle}
          />
        }
        {/* <View style={ProductScreenStyles.productImageStyle} /> */}
        <View style={ProductScreenStyles.circleSttyle}>
          <Image style={ProductScreenStyles.heartStyle} source={Images.heart} />
        </View>
      </View>
      <Text style={styles.regularTextStyle}>{data.name}</Text>
      <View style={ProductScreenStyles.priceViewStyle}>
        <Text
          style={[
            styles.regularTextStyle,
            {
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              color: Colors.light_gray,
            },
          ]}>
          {data.old_price}
        </Text>
        <Text
          style={[
            styles.regularTextStyle,
            {marginStart: 5, color: Colors.green},
          ]}>
          {data.price}
        </Text>
      </View>

      <TouchableHighlight style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>
          {'Add to Cart'.toUpperCase()}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default ProductSingleView;

const styles = StyleSheet.create({
  buttonStyle: {
    borderColor: Colors.red,
    borderWidth: 1,
    marginEnd: 15,
    marginTop: 10,
    alignItems: 'center',
    height: RH(3.5),
    backgroundColor: Colors.lightOrange,
  },
  buttonTextStyle: {
    color: Colors.red,
    fontFamily: Font.bold,
  },
  regularTextStyle: {
    fontSize: RFS(2),
    fontFamily: Font.regular,
    color: Colors.black,
  },
});
