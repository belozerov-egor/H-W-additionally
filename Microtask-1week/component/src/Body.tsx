type BodyType = {
    titleForBody: string
}

export const Body = (props: BodyType) => {
    return (
        <>{props.titleForBody}</>
    )
}