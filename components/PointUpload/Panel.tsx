import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Dialog,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import { cultural_period } from "../../constants/cultural_period";
import { glacial_period } from "../../constants/glacial_period";
import { point_validity } from "../../constants/point_validity";
import { shape } from "../../constants/shape";
import { size } from "../../constants/size";
import {
  createPoint,
  updatePoint,
  getPointByName,
  queryClient,
} from "../../src/api";
import Dropdown from "./Dropdown";
import MultiTextField from "./MultiTextField";
import CustomTextField from "./TextField";
import { useRouter } from "next/router";
import { dehydrate, useQuery } from "react-query";

const Panel = ({ is_edit, point_data }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const router = useRouter();

  // Form Fields
  const [point_name, set_point_name] = React.useState("");
  const [point_shape, set_point_shape] = React.useState([]);
  const [point_size, set_point_size] = React.useState([]);
  const [point_namers, set_point_namers] = React.useState([]);
  const [point_named_for, set_point_named_for] = React.useState("");
  const [point_year_identified, set_point_year_identified] = React.useState(0);
  const [point_type_site, set_point_type_site] = React.useState("");
  const [point_glacial_period, set_point_glacial_period] = React.useState([]);
  // const [point_canadian_period, set_point_canadian_period] = React.useState([]);
  const [point_cultural_period, set_point_cultural_period] = React.useState([]);
  // const [point_culture, set_point_culture] = React.useState([]);
  // const [point_environment, set_point_environment] = React.useState([]);
  // const [point_phase, set_point_phase] = React.useState([]);
  // const [point_tradition, set_point_tradition] = React.useState([]);
  const [point_year_range_start, set_point_year_range_start] =
    React.useState(0);
  const [point_year_range_start_type, set_point_year_range_start_type] =
    React.useState("BP");
  const [point_year_range_end, set_point_year_range_end] = React.useState(0);
  const [point_year_range_end_type, set_point_year_range_end_type] =
    React.useState("BP");
  const [point_variant, set_point_variant] = React.useState("");
  const [point_short_for, set_point_short_for] = React.useState("");
  const [point_aka, set_point_aka] = React.useState([]);
  // const [point_cluster, set_point_cluster] = React.useState("");
  const [point_point_validity, set_point_point_validity] = React.useState("");
  const [point_description, set_point_description] = React.useState("");
  // const [point_similar_point, set_point_similar_point] = React.useState([]);

  const getPointData = async () => {
    set_point_name(point_data.name);
    set_point_shape(point_data.shape);
    set_point_size(point_data.size);
    set_point_namers(point_data.namers);
    set_point_named_for(point_data.named_for);
    set_point_year_identified(point_data.year_identified);
    set_point_type_site(point_data.type_site);
    set_point_glacial_period(point_data.glacial_period);
    // set_point_canadian_period(point_data.canadian_period);
    set_point_cultural_period(point_data.cultural_period);
    // set_point_culture(point_data.culture);
    // set_point_environment(point_data.environment);
    // set_point_phase(point_data.phase);
    // set_point_tradition(point_data.tradition);
    set_point_year_range_start(point_data.year_range_start);
    set_point_year_range_start_type(point_data.year_range_start_type);
    set_point_year_range_end(point_data.year_range_end);
    set_point_year_range_end_type(point_data.year_range_end_type);
    set_point_variant(point_data.variant);
    set_point_short_for(point_data.short_for);
    set_point_aka(point_data.aka);
    // set_point_cluster(point_data.cluster);
    set_point_point_validity(point_data.point_validity);
    set_point_description(point_data.description);
    // set_point_similar_point(point_data.similar_point);
  };

  const uploadNewPoint = async () => {
    // Generate Name ID from input name
    // Remove non alphanumeric, set to lowercase, replace space with _
    let point_name_id = point_name.replaceAll(" ", "_");
    point_name_id = point_name_id.replace(/[^a-z0-9_]/gi, "");
    point_name_id = point_name_id.toLowerCase();

    // Send data
    await queryClient.fetchQuery("createPoint", () =>
      createPoint({
        name_id: point_name_id,
        name: point_name,
        shape: point_shape,
        size: point_size,
        namers: point_namers,
        named_for: point_named_for,
        year_identified: Number(point_year_identified),
        type_site: point_type_site,
        glacial_period: point_glacial_period,
        cultural_period: point_cultural_period,
        year_range_start: Number(point_year_range_start),
        year_range_start_type: point_year_range_start_type,
        year_range_end: Number(point_year_range_end),
        year_range_end_type: point_year_range_end_type,
        short_for: point_short_for,
        aka: point_aka,
        point_validity: point_point_validity,
        description: point_description,
      })
    );
  };

  const handleUpdatePoint = async () => {
    let point_name_id = point_name.replaceAll(" ", "_");
    point_name_id = point_name_id.replace(/[^a-z0-9_]/gi, "");
    point_name_id = point_name_id.toLowerCase();

    // Send data
    await queryClient.fetchQuery("updatePoint", () =>
      updatePoint({
        name_id: point_name_id,
        name: point_name,
        shape: point_shape,
        size: point_size,
        namers: point_namers,
        named_for: point_named_for,
        year_identified: Number(point_year_identified),
        type_site: point_type_site,
        glacial_period: point_glacial_period,
        cultural_period: point_cultural_period,
        year_range_start: Number(point_year_range_start),
        year_range_start_type: point_year_range_start_type,
        year_range_end: Number(point_year_range_end),
        year_range_end_type: point_year_range_end_type,
        short_for: point_short_for,
        aka: point_aka,
        point_validity: point_point_validity,
        description: point_description,
      })
    );
  };

  const checkValidSubmission = () => {
    return point_name != "";
  };

  const handleSubmit = () => {
    // Check valid
    if (!checkValidSubmission()) {
      console.log("Error Submitting");
      return;
    }

    setDialogOpen(true);

    let name_id;

    if (is_edit) {
      name_id = handleUpdatePoint();
    } else {
      name_id = uploadNewPoint();
    }

    setTimeout(() => {
      router.push(`/points/${name_id}`);
    }, 3000);
  };

  useEffect(() => {
    console.log("Useeffect");
    if (is_edit && point_data) {
      getPointData();
    }
  }, [point_data]);

  return (
    <>
      <Box
        sx={{
          maxWidth: "50rem",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        {/* Column One */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "50%",
          }}
        >
          <CustomTextField
            required={true}
            label={"Name"}
            onChange={(e) => {
              set_point_name(e.target.value);
            }}
            value={point_name}
            disabled={is_edit}
          />

          <Dropdown
            label={"Shape"}
            onChange={(e, new_val) => {
              set_point_shape(new_val);
            }}
            options={shape}
            value={point_shape}
          />

          <Dropdown
            label={"Size"}
            onChange={(e, new_val) => {
              set_point_size(new_val);
              console.log(point_size);
            }}
            options={size}
            value={point_size}
          />

          <MultiTextField
            label={"Named By (Press Enter After Each)"}
            returnValues={(values) => {
              set_point_namers(values);
            }}
            values={point_namers}
          />

          <CustomTextField
            label={"Named For"}
            onChange={(e) => {
              set_point_named_for(e.target.value);
            }}
            value={point_named_for}
          />

          <CustomTextField
            label={"Year Identified"}
            onChange={(e) => {
              set_point_year_identified(e.target.value);
            }}
            value={point_year_identified}
          />

          <CustomTextField
            label={"Type Site"}
            onChange={(e) => {
              set_point_type_site(e.target.value);
            }}
            value={point_type_site}
          />

          <Dropdown
            label={"Glacial Period"}
            onChange={(e, new_val) => {
              set_point_glacial_period(new_val);
            }}
            options={glacial_period}
            value={point_glacial_period}
          />

          <Dropdown
            label={"Cultural Period"}
            onChange={(e, new_val) => {
              set_point_cultural_period(new_val);
            }}
            options={cultural_period}
            value={point_cultural_period}
          />

          {/* Column Two */}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "50%",
          }}
        >
          {/* Year Start */}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CustomTextField
              label={"Year Range Start"}
              onChange={(e) => {
                set_point_year_range_start(e.target.value);
              }}
              value={point_year_range_start}
            />

            <Select
              value={point_year_range_start_type}
              onChange={(e: SelectChangeEvent) => {
                set_point_year_range_start_type(e.target.value);
              }}
            >
              <MenuItem value={"BP"}>BP</MenuItem>
              <MenuItem value={"AD"}>AD</MenuItem>
            </Select>
          </Box>

          {/* Year End */}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CustomTextField
              label={"Year Range End"}
              onChange={(e) => {
                set_point_year_range_end(e.target.value);
              }}
              value={point_year_range_end}
            />

            <Select
              value={point_year_range_end_type}
              onChange={(e: SelectChangeEvent) => {
                set_point_year_range_end_type(e.target.value);
              }}
            >
              <MenuItem value={"BP"}>BP</MenuItem>
              <MenuItem value={"AD"}>AD</MenuItem>
            </Select>
          </Box>

          <CustomTextField
            label={"Variant"}
            onChange={(e) => {
              set_point_variant(e.target.value);
            }}
            value={point_variant}
          />

          <CustomTextField
            label={"Short For"}
            onChange={(e) => {
              set_point_short_for(e.target.value);
            }}
            value={point_short_for}
          />

          <MultiTextField
            label={"AKA (Press Enter After Each)"}
            returnValues={(values) => {
              set_point_aka(values);
            }}
            values={point_aka}
          />

          <TextField
            select
            value={point_point_validity}
            onChange={(e: SelectChangeEvent) =>
              set_point_point_validity(e.target.value)
            }
            label="Point Validity"
            InputLabelProps={{ shrink: true }}
          >
            {point_validity.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </TextField>

          <CustomTextField
            label={"Description (Supports Markdown)"}
            onChange={(e) => {
              set_point_description(e.target.value);
            }}
            multiline={true}
            value={point_description}
          />

          {/* Submit button */}
          <Button onClick={handleSubmit}>Submit</Button>
          <Dialog open={dialogOpen}>
            <Box
              sx={{
                m: "5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <p>Uploading new projectile point...</p>
              <CircularProgress />
            </Box>
          </Dialog>
        </Box>
      </Box>
    </>
  );
};

export default Panel;
