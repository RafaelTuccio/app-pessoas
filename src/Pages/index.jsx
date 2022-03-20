import Navbar from "../Component/Navbar"
import Container from "../Component/Container"
import Table from "../Component/Table"
import Footer from "../Component/Footer"

const User = (props) => {

    const users = [
        {
          gender: 'female',
          name: { title: 'Ms', first: 'Jennifer', last: 'Adan' },
          location: {
            street: [Object],
            city: 'Vikavågen',
            state: 'Rogaland',
            country: 'Norway',
            postcode: '7420',
            coordinates: [Object],
            timezone: [Object]
          },
          email: 'jennifer.adan@example.com',
          login: {
            uuid: '70f726ea-12d0-423a-a866-30a6c6812c7f',
            username: 'happyduck133',
            password: 'green',
            salt: 'iYbhmN6G',
            md5: '44dd9b3428d298586e9f0c9ee2c19813',
            sha1: 'fe33b0a734af3dac12d1afa9193b9e100aa3d68f',
            sha256: 'f63136e438c3a206798db27664fe5039433a4d064a6380c35bd7616985fc538a'
          },
          dob: { date: '1979-06-04T12:03:24.082Z', age: 43 },
          registered: { date: '2009-02-04T13:05:29.950Z', age: 13 },
          phone: '55017498',
          cell: '48763239',
          id: { name: 'FN', value: '04067941654' },
          picture: {
            large: 'https://randomuser.me/api/portraits/women/73.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/73.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/73.jpg'
          },
          nat: 'NO'
        },
        {
          gender: 'male',
          name: { title: 'Mr', first: 'Terry', last: 'Snyder' },
          location: {
            street: [Object],
            city: 'San Francisco',
            state: 'South Dakota',
            country: 'United States',
            postcode: 52385,
            coordinates: [Object],
            timezone: [Object]
          },
          email: 'terry.snyder@example.com',
          login: {
            uuid: 'ebb446e9-2cf5-4ed6-99cc-7f66e6d24eb1',
            username: 'sadbutterfly280',
            password: 'tbird',
            salt: '9AA6xZkr',
            md5: '1e0c0d2026934d57464ec62f1458a9cc',
            sha1: 'eb70602ff8258c5ee48ffe0b32d48e011582f4a8',
            sha256: '0f769fc1230099d003dc470515f986c514af7076b65ebcfbdec5489aee321d0e'
          },
          dob: { date: '1973-03-02T01:45:53.648Z', age: 49 },
          registered: { date: '2015-04-27T10:14:03.735Z', age: 7 },
          phone: '(396)-328-0605',
          cell: '(035)-989-0688',
          id: { name: 'SSN', value: '369-82-8279' },
          picture: {
            large: 'https://randomuser.me/api/portraits/men/43.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/43.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/43.jpg'
          },
          nat: 'US'
        },
        {
          gender: 'male',
          name: { title: 'Mr', first: 'Eugene', last: 'Bradley' },
          location: {
            street: [Object],
            city: 'New York',
            state: 'Delaware',
            country: 'United States',
            postcode: 35181,
            coordinates: [Object],
            timezone: [Object]
          },
          email: 'eugene.bradley@example.com',
          login: {
            uuid: 'b64ea54d-0b08-4058-aee0-9dd69fe3c4be',
            username: 'bigduck747',
            password: 'honor',
            salt: 'vK89ZwnH',
            md5: '684b1cdbe49c8fe3a159a4edf4c985d3',
            sha1: '3a918e82cef826029d9bca67261bbc6981d1f4de',
            sha256: '4090957ffe2cc168ce7c96cac210eaf9090d7cbbfbe767039ba861918730294b'
          },
          dob: { date: '1967-12-30T01:00:38.842Z', age: 55 },
          registered: { date: '2005-09-12T15:42:03.545Z', age: 17 },
          phone: '(957)-237-9189',
          cell: '(072)-207-7805',
          id: { name: 'SSN', value: '102-39-1454' },
          picture: {
            large: 'https://randomuser.me/api/portraits/men/9.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/9.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/9.jpg'
          },
          nat: 'US'
        }
      ]




    return(
        <>
            <Navbar />
            <Container>
                <Table users={users}/>
            </Container>
            <Footer />
        </>
    )
}

export default User