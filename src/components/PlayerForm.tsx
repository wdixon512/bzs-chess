//if html must be tsx


import { useContext } from "react"
import { useRouter } from "next/router";
import { useForm, SubmitHandler, Form } from "react-hook-form"

import { Center, Input, Flex, Button, FormControl, Text } from "@chakra-ui/react"
import { GameContext } from "./contexts/GameContext"

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

    const { setPlayer1, setPlayer2 } = useContext(GameContext);

    const router = useRouter();

    //<> equals 'of type' or 'for'
    const onSubmit: SubmitHandler<PlayerNames> = (data) => {
        setPlayer1(data.player1)
        setPlayer2(data.player2)

        router.push("play");
    }


    return (
        <Center>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Input {...register("player1", { required: true, minLength: 2 })} />
                    {/* errors will return when field validation fails  */}
                    {errors.player1 && errors.player1.type === "required" && <Text textColor="red" >This is a required field</Text>}
                    {errors.player1 && errors.player1.type === "minLength" && <Text textColor="red" >Name must be at least 2 chars.</Text>}

                </FormControl>
                <FormControl>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Input {...register("player2", { required: true, minLength: 2 })} />
                    {/* errors will return when field validation fails  */}
                    {errors.player2 && errors.player2.type === "required" && <Text textColor="red" >This is a required field</Text>}
                    {errors.player2 && errors.player2.type === "minLength" && <Text textColor="red" >Name must be at least 2 chars.</Text>}

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