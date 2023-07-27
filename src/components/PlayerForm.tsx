//if html must be tsx

import { useForm, SubmitHandler, Form } from "react-hook-form"

import { Center, Input, Flex, Button, FormControl } from "@chakra-ui/react"

type PlayerNames = {
    player1: string
    player2: string
}
export const PlayerForm = () => {
    const {
        register, //yellow things are hook functions
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<PlayerNames>()

    const onSubmit: SubmitHandler<PlayerNames> = (data) => {
        console.log(data)
    }  //<> equals 'of type' or 'for'

    return (
        <Center>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Input {...register("player1", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.player1 && <span>This field is required</span>}
                </FormControl>
                <FormControl>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Input {...register("player2", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.player2 && <span>This field is required</span>}
                </FormControl>

                <Button
                    mt={"5"}
                    bgColor={"red"}
                    textColor={"white"}
                    width={"fit-content"}
                    justifySelf={"center"}
                    type="submit"
                >
                    Play
                </Button>
            </form>
        </Center>
    )
}