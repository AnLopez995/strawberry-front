interface CategoryProps {
    params:{
        categories: string;
    }
}

export default function Category(props: CategoryProps) {
    const { categories } = props.params;
    console.log(categories)
    return (
        <h1 className="text-black">Categoria Dinamica: {categories}</h1>
    )
}
