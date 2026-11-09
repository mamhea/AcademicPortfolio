import { describe, it, expect } from "vitest";
import { render, screen, within, fireEvent } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";

import Navbar from "./navbar";

describe("Navbar", () => {
    const renderNavbar = (initialRoute = "/") => {
        return render(
            <MemoryRouter initialEntries={[initialRoute]}>
                <Navbar />
            </MemoryRouter>
        );
    };

    it("應該正確顯示 Logo", () => {
        renderNavbar();

        expect(
            screen.getByRole("link", { name: /AcademicPortfolio/ })
        ).toBeInTheDocument();
    });

    it("應該顯示 8 個桌面版導覽連結", () => {
        renderNavbar();

        const desktopNavigation = document.querySelector(
            ".navbar-links"
        );

        expect(desktopNavigation).not.toBeNull();

        expect(
            within(desktopNavigation as HTMLElement).getAllByRole("link")
        ).toHaveLength(8);
    });

    it("目前頁面的導覽連結應該具有 active class", () => {
        renderNavbar("/about");

        const desktopNavigation = document.querySelector(
            ".navbar-links"
        );

        expect(
            within(desktopNavigation as HTMLElement).getByRole("link", {
                name: "關於我",
            })
        ).toHaveClass("active");
    });

    it("點擊行動版選單按鈕應該開啟選單", () => {
        const { container } = renderNavbar();

        const menuButton = container.querySelector<HTMLButtonElement>(
            ".navbar-menu-button"
        );

        const mobileNavigation = container.querySelector(
            ".navbar-mobile"
        );

        expect(menuButton).not.toBeNull();
        expect(mobileNavigation).not.toBeNull();

        expect(menuButton).toHaveAttribute("aria-expanded", "false");

        fireEvent.click(menuButton!);

        expect(menuButton).toHaveAttribute("aria-expanded", "true");
        expect(mobileNavigation).toHaveClass("open");
    });

    it("點擊行動版導覽連結後應該關閉選單", () => {
        const { container } = renderNavbar();

        const menuButton = container.querySelector<HTMLButtonElement>(
            ".navbar-menu-button"
        );

        const mobileNavigation = container.querySelector(
            ".navbar-mobile"
        );

        expect(menuButton).not.toBeNull();
        expect(mobileNavigation).not.toBeNull();

        // 開啟選單
        fireEvent.click(menuButton!);

        expect(mobileNavigation).toHaveClass("open");

        // 找到「關於我」連結
        const aboutLink = mobileNavigation!.querySelector<HTMLAnchorElement>(
            'a[href="/about"]'
        );

        expect(aboutLink).not.toBeNull();

        // 點擊連結
        fireEvent.click(aboutLink!);

        // 確認選單關閉
        expect(menuButton).toHaveAttribute("aria-expanded", "false");
        expect(mobileNavigation).not.toHaveClass("open");
    });
});