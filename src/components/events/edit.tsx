import { HttpError } from "@pankod/refine-core";
import {
    Edit,
    Box,
    TextField,
} from "@pankod/refine-mui";
import { useForm } from "@pankod/refine-react-hook-form";
import { Event } from "../../interfaces";

export const EventEdit: React.FC = () => {
    const {
        refineCore: { formLoading },
        saveButtonProps,
        register,
        formState: { errors },
    } = useForm<Event, HttpError>();

    return (
        <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("type", { required: "Type is required" })}
                    error={!!errors?.type}
                    margin="normal"
                    required
                    fullWidth
                    id="type"
                    label="Type"
                    name="type"
                    defaultValue={" "}
                    disabled
                />

                <TextField
                  {...register("eventName", { required: "Event name is required" })}
                  error={!!errors?.type}
                  margin="normal"
                  required
                  fullWidth
                  id="eventName"
                  label="Event Name"
                  name="eventName"
                  defaultValue={" "}
                  disabled
                />    

                <TextField
                  {...register("description", { required: "Description is required" })}
                  error={!!errors?.type}
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  defaultValue={" "}
                />    
            </Box>
        </Edit>
    );
};