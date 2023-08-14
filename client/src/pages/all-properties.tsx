import { useNavigate } from "react-router-dom";
import { useTable } from "@pankod/refine-core";
import { useMemo } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Add } from "@mui/icons-material";

import { CustomButton } from "components/common/CustomButton";
import { PropertyCard } from "components/common/PropertyCard";

import { colors } from "constants/colors";

export const AllPropertiesPage = () => {
  const navigate = useNavigate();

  // fetch data according to the sorter (uses useList under the hood to fetch)
  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable();

  const allProperties = data?.data ?? [];

  const currentPrice = sorter.find((item) => item.field === "price")?.order;

  const toggleSort = (field: string) => {
    setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
  };

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) =>
      "field" in item ? item : []
    );

    return {
      title: logicalFilters.find((item) => item.field === "title")?.value || "",
      propertyType:
        logicalFilters.find((item) => item.field === "propertyType")?.value ||
        "",
    };
  }, [filters]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  const allPropertiesText = (
    <Typography fontSize={25} fontWeight={700} color={colors.EERIE_BLACK}>
      {!allProperties.length ? "There are no properties" : "All Properties"}
    </Typography>
  );

  const sortButton = (
    <CustomButton
      title={`Sort price ${currentPrice === "asc" ? "↑" : "↓"}`}
      handleClick={() => toggleSort("price")}
      backgroundColor={colors.ROYAL_BLUE}
      color={colors.LOTION}
    />
  );

  const searchBar = (
    <TextField
      variant="outlined"
      color="info"
      placeholder="Search by title"
      value={currentFilterValues.title}
      onChange={(e) => {
        setFilters([
          {
            field: "title",
            operator: "contains",
            value: e.currentTarget.value ? e.currentTarget.value : undefined,
          },
        ]);
      }}
    />
  );

  const propertyTypeSelect = (
    <Select
      variant="outlined"
      color="info"
      displayEmpty
      required
      inputProps={{ "aria-label": "Without label" }}
      defaultValue=""
      value={currentFilterValues.propertyType}
      onChange={(e) => {
        setFilters(
          [
            {
              field: "propertyType",
              operator: "eq",
              value: e.target.value,
            },
          ],
          "replace"
        );
      }}
    >
      <MenuItem value="">All</MenuItem>
      {[
        "Apartment",
        "Villa",
        "Farmhouse",
        "Condos",
        "Townhouse",
        "Duplex",
        "Studio",
        "Chalet",
      ].map((type) => (
        <MenuItem key={type} value={type.toLowerCase()}>
          {type}
        </MenuItem>
      ))}
    </Select>
  );

  const addButton = (
    <CustomButton
      title="Add Property"
      handleClick={() => navigate("/properties/create")}
      backgroundColor={colors.ROYAL_BLUE}
      color={colors.LOTION}
      icon={<Add />}
    />
  );

  const prevPageButton = (
    <CustomButton
      title="Previous"
      handleClick={() => setCurrent((prev) => prev - 1)}
      backgroundColor={colors.ROYAL_BLUE}
      color={colors.LOTION}
      disabled={!(current > 1)}
    />
  );

  const pageNumber = (
    <Box display={{ xs: "hidden", sm: "flex" }} alignItems="center" gap="5px">
      Page{" "}
      <strong>
        {current} of {pageCount}
      </strong>
    </Box>
  );

  const nextPageButton = (
    <CustomButton
      title="Next"
      handleClick={() => setCurrent((prev) => prev + 1)}
      backgroundColor={colors.ROYAL_BLUE}
      color={colors.LOTION}
      disabled={current === pageCount}
    />
  );

  const numberOfResultsPerPageSelect = (
    <Select
      variant="outlined"
      color="info"
      displayEmpty
      required
      inputProps={{ "aria-label": "Without label" }}
      defaultValue={10}
      onChange={(e) =>
        setPageSize(e.target.value ? Number(e.target.value) : 10)
      }
    >
      {[10, 20, 30, 40, 50].map((size) => (
        <MenuItem key={size} value={size}>
          Show {size}
        </MenuItem>
      ))}
    </Select>
  );

  return (
    <Box>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Stack direction="column" width="100%">
          {allPropertiesText}
          <Box
            mb={2}
            mt={3}
            display="flex"
            width="84%"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
              mb={{ xs: "20px", sm: 0 }}
            >
              {sortButton}
              {searchBar}
              {propertyTypeSelect}
            </Box>
          </Box>
        </Stack>
      </Box>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {addButton}
      </Stack>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allProperties?.map((property) => (
          <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            location={property.location}
            price={property.price}
            photo={property.photo}
          />
        ))}
      </Box>

      {allProperties.length > 0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          {prevPageButton}
          {pageNumber}
          {nextPageButton}
          {numberOfResultsPerPageSelect}
        </Box>
      )}
    </Box>
  );
};
