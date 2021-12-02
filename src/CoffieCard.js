import React from "react";
import { 
    makeStyles,
    Box,
    Card,
    Button,
    CardActions,
    CardHeader,
    CardContent, 
    Typography, 
    Avatar,
    IconButton,
    CardMedia
} from "@material-ui/core";
import { Share } from "@material-ui/icons";


const CoffieCard = () => {
    return (
        <Box>
            <Card variant="outlined">
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            O
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="setting">
                            <Share />
                        </IconButton>
                    }
                    title="Shripm and Choroer Perere"
                    subheader="September 14, 2016"
                >
                </CardHeader>
                <CardMedia
                    style={{ height: "200px" }}
                    image="https://images.freeimages.com/images/large-previews/9d6/philippine-coins-1483943.jpg"
                />
                <CardContent>
                    <Typography variant="body2">
                    ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Buy Now</Button>
                    <Button size="medium">Offer</Button>
                </CardActions>
            </Card> 
        </Box>
    )
}

export default CoffieCard;