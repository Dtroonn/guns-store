import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ContentLoader from "react-content-loader";

import {
	Container,
	Title,
	SelectBlock,
	Product,
	ProductLoadingBlock,
	Filterbar,
	FilterbarLoadingBlock,
	Attention,
	Pagination,
} from "../components";

import { useBreakpoint, usePrevious } from "../hooks";

import { fetchProducts, setPage } from "../redux/actions/products";
import {
	setActiveCategory,
	setSortBy,
	fetchFilterbarFilters,
	setActiveFilterbarFilters,
	resetActiveFilters,
} from "../redux/actions/filters";

const sortItems = [
	{ name: "Популярности", value: "rating_-1" },
	{ name: "Возрастанию цены", value: "price_1" },
	{ name: "Убыванию цены", value: "price_-1" },
];

const TotalCountLoader = ({ isLargeDevices }) => (
	<ContentLoader
		style={{ margin: "0 0 -4px 0" }}
		speed={2}
		width={isLargeDevices ? 84 : 74}
		height={isLargeDevices ? 30 : 25}
		viewBox="0 0 89 30"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="20" y="0" rx="0" ry="0" width="54" height="30" />
	</ContentLoader>
);

const Products = () => {
	const isLargeDevices = useBreakpoint("min-width", 991.98);
	const productsRef = React.useRef(null);

	const { category } = useParams();

	console.log("rerender");

	const dispatch = useDispatch();
	const {
		items,
		page,
		count,
		totalCount,
		isLoading,
		categories,
		activeCategory,
		sortBy,
		filterbarFilters,
		isLoadingFilterbarFilters,
		activeFilterbarFilters,
		activeTypes,
	} = useSelector(
		({ products, filters }) => ({
			items: products.items,
			count: products.count,
			page: products.page,
			totalCount: products.totalCount,
			isLoading: products.isLoading,
			categories: filters.categories,
			activeCategory: filters.activeCategory,
			sortBy: filters.sortBy,
			filterbarFilters: filters.filterbarFilters,
			isLoadingFilterbarFilters: filters.isLoadingFilterbarFilters,
			activeFilterbarFilters: filters.activeFilterbarFilters,
		}),
		shallowEqual
	);

	const prevActiveFilterbarFilters = usePrevious(activeFilterbarFilters);

	React.useEffect(() => {
		const goToProductsValue =
			productsRef.current.getBoundingClientRect().top +
			window.pageYOffset -
			15 -
			(!isLargeDevices
				? document.querySelector("header").offsetHeight
				: 0);
		window.scrollTo({
			top: goToProductsValue,
		});
	});

	React.useLayoutEffect(() => {
		if (activeCategory.slug !== category) {
			dispatch(resetActiveFilters());
			dispatch(setPage(1));
			dispatch(fetchFilterbarFilters(category));
			dispatch(setActiveCategory(category));
			return;
		}
		if (
			prevActiveFilterbarFilters !== activeFilterbarFilters &&
			page !== 1
		) {
			dispatch(setPage(1));
			return;
		}
		dispatch(
			fetchProducts(category, page, count, sortBy, activeFilterbarFilters)
		);
	}, [category, activeCategory, page, sortBy, activeFilterbarFilters]);

	const handlePageChange = React.useCallback((data) => {
		dispatch(setPage(data.selected + 1));
	}, []);

	const onSortTypeSelect = React.useCallback((value) => {
		dispatch(setSortBy(value));
		dispatch(setPage(1));
	}, []);

	const handleFiltersSubmit = React.useCallback((filters) => {
		console.log(filters);
		dispatch(setActiveFilterbarFilters(filters));
	}, []);

	const handleFiltersReset = React.useCallback((filters) => {
		dispatch(
			setActiveFilterbarFilters({
				types: [],
				kinds: [],
				isSale: false,
				price: {},
			})
		);
	}, []);

	const TitleWithData = () => {
		return (
			<Title>
				{activeCategory.name}
				{isLoading ? (
					<TotalCountLoader isLargeDevices={isLargeDevices} />
				) : (
					<span>{totalCount}</span>
				)}
			</Title>
		);
	};

	return (
		<React.Fragment>
			<StyledProducts ref={productsRef}>
				<Container>
					{!isLargeDevices && <TitleWithData />}
					<StyledHeader>
						<StyledHeaderColumn>
							{isLargeDevices ? (
								<TitleWithData />
							) : isLoadingFilterbarFilters ? (
								<FilterbarLoadingBlock />
							) : (
								<Filterbar
									filters={filterbarFilters}
									onFiltersSubmit={handleFiltersSubmit}
									onFiltersReset={handleFiltersReset}
								/>
							)}
						</StyledHeaderColumn>
						<StyledHeaderColumn>
							<SelectBlock
								title="Сортировать по:"
								items={sortItems}
								selectedValue={sortBy}
								onItemSelect={onSortTypeSelect}
							/>
						</StyledHeaderColumn>
					</StyledHeader>
					<StyledBody>
						{isLargeDevices &&
							(isLoadingFilterbarFilters ? (
								<StyledFilterbarWrapper>
									<FilterbarLoadingBlock />
								</StyledFilterbarWrapper>
							) : (
								<StyledFilterbarWrapper>
									<Filterbar
										filters={filterbarFilters}
										onFiltersSubmit={handleFiltersSubmit}
										onFiltersReset={handleFiltersReset}
									/>
								</StyledFilterbarWrapper>
							))}
						<StyledContent>
							<StyledRow>
								{isLoading &&
									Array(count)
										.fill(0)
										.map((_, index) => (
											<StyledColumn key={index}>
												<ProductLoadingBlock />
											</StyledColumn>
										))}
								{!isLoading &&
									items.map((product) => (
										<StyledColumn key={product._id}>
											<Product {...product} />
										</StyledColumn>
									))}
							</StyledRow>
							<StyledContentBottom>
								<Pagination
									pageCount={Math.ceil(totalCount / count)}
									onPageChange={handlePageChange}
									forcePage={page - 1}
								/>
								<StyledWatchedProductsCount>
									Вы посмотрели{" "}
									{count * page >= totalCount
										? totalCount
										: count * page}{" "}
									из {totalCount} товаров
								</StyledWatchedProductsCount>
							</StyledContentBottom>
						</StyledContent>
					</StyledBody>
				</Container>
			</StyledProducts>
			<Attention />
		</React.Fragment>
	);
};

const StyledProducts = styled.div`
	margin: 0 0 86px 0;
	@media ${({ theme }) => theme.media.largeDevices} {
		margin: 0 0 66px 0;
	}
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 0 0 50px 0;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 0 0 40px 0;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		margin: 0 0 30px 0;
	}
`;

const StyledHeader = styled.div`
	display: flex;
	margin: 0 0 40px 0;
	align-items: center;
	justify-content: space-between;
	@media ${({ theme }) => theme.media.mediumDevices} {
		margin: 18px 0 30px 0;
	}
	@media (max-width: 530px) {
		display: block;
	}
`;

const StyledHeaderColumn = styled.div`
	&:first-child {
		margin: 0 30px 0 0;
		@media (max-width: 530px) {
			margin: 0 0 20px 0;
		}
	}
`;

const StyledBody = styled.div`
	display: flex;
`;

const StyledFilterbarWrapper = styled.div`
	margin: 0 24px 0 0;
	flex: 0 0 288px;
	@media ${({ theme }) => theme.media.largeDevices} {
	}
`;

const StyledContent = styled.div`
	flex: 1 1 auto;
`;

const StyledRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -12px;
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 0 -8px;
	}
`;

const StyledColumn = styled.div`
	padding: 0 12px;
	flex: 0 0 33.333%;
	margin: 0 0 24px 0;
	@media ${({ theme }) => theme.media.largeDevices} {
		flex: 0 0 50%;
	}
	@media ${({ theme }) => theme.media.smallDevices} {
		padding: 0 8px;
	}
	@media ${({ theme }) => theme.media.extraSmallDevices} {
		flex: 0 0 100%;
	}
`;

const StyledContentBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media ${({ theme }) => theme.media.smallDevices} {
		flex-direction: column;
	}
`;

const StyledWatchedProductsCount = styled.div`
	font-size: 16px;
	color: rgba(0, 0, 0, 0.4);
	margin: 0 0 0 40px;
	text-align: right;
	line-height: 19px;
	@media ${({ theme }) => theme.media.smallDevices} {
		margin: 17px 0 0 0;
		text-align: center;
	}
`;

export default Products;
