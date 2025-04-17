import connectMongoDB from '../../config/mongodb';
import Content from '../components/Content';
import Welcome from '../components/Welcome';

export default function Home() {
  connectMongoDB();
  return (
    <Content>
      <Welcome />
    </Content>
  )
}


