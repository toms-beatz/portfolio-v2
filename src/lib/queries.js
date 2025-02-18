//const token = "skgw5J4qQFfEKBt1bVDbO7FkxuOuoBNYIMIBBe9OQpfOrBBq46LSKNQJbxL7sspEgdGgbmnVF1HNaLV0kWK7zucjEyUulYe1nAmSPbyYj22JZQaaWWkvkdQ0IsQ58K7QuxuWBmvUYj7Rj1GMUxlfuwhEUooSLYe76GyUzQrO3gs98T3BKXQx"
const token = "skace9Xnd99Vn5AGSdRn5sdYaDo9JCweTMCQzBTd3pJyVcm5X6j7jKI38LV8J2xabvTOdOEnoc3EPLLjnOYVpzmwEPaCndykWFvuFY8Hf65zodnAJEGfGeTKaIDVZJCRZAobaxz1eqE9yYvok2Zt8NxMLjV7aD3cHDcLHvLxVtBED13htFpN"; // Remplace par ton vrai token

export async function getProjects() {
    const query = `*[_type == "projet"]{
  title,
  desc,
  "img": img.asset->url,
  links,
  type
}`;

    try {
        const response = await fetch(`https://fyzl3rgg.apicdn.sanity.io/v2025-02-18/data/query/prod?query=${encodeURIComponent(query)}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data from Sanity");
        }

        return await response.json();

    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

export async function getSidebarData() {
    const query = `*[_type == "sidebar"][0]`
    try {
        const response = await fetch(`https://fyzl3rgg.apicdn.sanity.io/v2025-02-18/data/query/prod?query=${encodeURIComponent(query)}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch data from Sanity");
        }
        return await response.json();
    } catch (error) {
        return console.error("Error fetching sidebar data:", error);
    }
}

export async function getTestimonials() {
    const query = `*[_type == "testimonials"]{
  name,
  desc,
  "img": img.asset->url,
}`;

    try {
        const response = await fetch(`https://fyzl3rgg.apicdn.sanity.io/v2025-02-18/data/query/prod?query=${encodeURIComponent(query)}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data from Sanity");
        }

        return await response.json();

    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

export async function getAboutDesc() {
    const query = `*[_type == "about"][0]{
  desc
}`;

    try {
        const response = await fetch(`https://fyzl3rgg.apicdn.sanity.io/v2025-02-18/data/query/prod?query=${encodeURIComponent(query)}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data from Sanity");
        }

        return await response.json();

    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

