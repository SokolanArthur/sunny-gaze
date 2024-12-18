interface Props {
    params: {
        id: number;
    }
}

export default function Home( {params} : Props ) {
    return (
      <div>
        <p>Карточка продукта {params.id}</p>
      </div>
    );
  }