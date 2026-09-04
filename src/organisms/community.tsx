
import Shape from '../atoms/shape'
import CommunityContributions from '../molecules/communityContributions'

function Community() {
  return (
    <div className="relative bg-cover z-20">
      <CommunityContributions />

      <Shape
        shape="circle" size="45vh" rotate='1'
        bottom="60%" right="-10%"
        mobileSize="34vh"
        mobileBottom="60%" mobileRight="-30%"
      />

      <Shape
        shape="square" size="32vh" rotate='100'
        top="30%" left="-3%"
        mobileSize="34vh"
        mobileTop="15%" mobileLeft="-30%" />

      <Shape
        shape="triangle" size="35vh" rotate='140' index='1'
        top="40%" right="-5%"
        mobileSize="34vh"
        mobileTop="25%" mobileRight="-25%" />


    </div>
  )
}

export default Community