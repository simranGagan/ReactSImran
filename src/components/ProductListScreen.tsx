import {Image, Text, View} from 'react-native';
import ProductScreenStyles from './ProductScreenStyles';
import ProductSingleView from './ProductSingleView';
import {FlatGrid} from 'react-native-super-grid';
import {Images} from '../AppTheme';

const ProductListScreen = () => {
  const data = [
    {
      name: 'Single lamp',
      old_price: 'rs800',
      price: 'rs400',
    },
    {
      name: 'Double lamp',
      old_price: 'rs1000',
      price: 'rs500',
    },
    {
      name: 'triple lamp',
      old_price: 'rs900',
      price: 'rs700',
    },
    {
      name: 'gjhfghfh lamp',
      old_price: 'rs8000',
      price: 'rs4000',
    },
    {
      name: 'abcsg lamp',
      old_price: 'rs8900',
      price: 'rs7800',
    },
    {
      name: 'ohfgdn lamp',
      old_price: 'rs1300',
      price: 'rs800',
    },
    {
      name: 'Single lamp',
      old_price: 'rs900',
      price: 'rs400',
    },
    {
      name: 'Unique lamp',
      old_price: 'rs1900',
      price: 'rs1400',
    },
  ];
  return (
    <View style={ProductScreenStyles.mainContainerStyle}>
      <View style={ProductScreenStyles.headerStyle}>
        <Image
          style={ProductScreenStyles.backArrowStyle}
          source={Images.backArrow}
        />
        <Text style={ProductScreenStyles.headerTextStyle}>
          Acyclic 3d Lamps
        </Text>
      </View>
      <View style={{marginStart: 5, marginEnd: 5}}>
        <FlatGrid
          data={data}
          itemDimension={120}
          contentContainerStyle={{
            marginEnd: 5,
            marginStart: 5,
            marginBottom: 10,
            paddingBottom: 50,
          }}
          renderItem={({item}) => <ProductSingleView data={item} />}
        />
      </View>
    </View>
  );
};
export default ProductListScreen;
