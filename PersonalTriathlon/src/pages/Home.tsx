
interface Props {
    user: {
        name: string;
        id: string;
    };
}

const Home = ({ user }: Props) => {
    

    return (
        <>
            <h1>Hello {user.name}</h1>

            
        </>
    );
};

export default Home;
