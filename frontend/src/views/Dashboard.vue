<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getAllPlayers } from "../services/playerService";
import type { Player } from "../services/playerService";

const players = ref<Player[]>([]);

onMounted(async () => {
  try {
    players.value = await getAllPlayers();
  } catch (error) {
    console.error("Error fetching players:", error);
  }
});
</script>

<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">Dashboard</h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 28 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                  fill="currentColor"
                />
                <path
                  d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                  fill="currentColor"
                />
                <path
                  d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                  fill="currentColor"
                />
                <path
                  d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                  fill="currentColor"
                />
                <path
                  d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                  fill="currentColor"
                />
                <path
                  d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{ players.length }}
              </h4>
              <div class="text-gray-500">All Players</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-blue-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2V4H20V2C20 1.44772 20.4477 1 21 1C21.5523 1 22 1.44772 22 2V4H24C25.1046 4 26 4.89543 26 6V24C26 25.1046 25.1046 26 24 26H4C2.89543 26 2 25.1046 2 24V6C2 4.89543 2.89543 4 4 4H6V2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2ZM4 8V24H24V8H4ZM6 12H10V16H6V12ZM12 12H16V16H12V12ZM18 12H22V16H18V12Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">
                {{
                  players.length
                    ? Math.max(...players.map((p) => p.matches_played))
                    : 0
                }}
              </h4>
              <div class="text-gray-500">Total Matches</div>
            </div>
          </div>
        </div>

        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm"
          >
            <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
              <svg
                class="w-8 h-8 text-white"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM14 4C19.5228 4 24 8.47715 24 14C24 19.5228 19.5228 24 14 24C8.47715 24 4 19.5228 4 14C4 8.47715 8.47715 4 14 4ZM12.5 8C12.2239 8 12 8.22386 12 8.5V9.5C12 9.77614 12.2239 10 12.5 10H15.5C15.7761 10 16 9.77614 16 9.5V8.5C16 8.22386 15.7761 8 15.5 8H12.5ZM10 12C9.44772 12 9 12.4477 9 13V15C9 15.5523 9.44772 16 10 16H18C18.5523 16 19 15.5523 19 15V13C19 12.4477 18.5523 12 18 12H10ZM12 18C11.4477 18 11 18.4477 11 19V20C11 20.5523 11.4477 21 12 21H16C16.5523 21 17 20.5523 17 20V19C17 18.4477 16.5523 18 16 18H12Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div class="mx-5">
              <h4 class="text-2xl font-semibold text-gray-700">24</h4>
              <div class="text-gray-500">Total Goals</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8" />

    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Player Name
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  No
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Position
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Matches
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Goals
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Assists
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Yellow/Red Cards
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in players" :key="index">
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center"
                >
                  <div class="text-sm font-medium leading-5 text-gray-900">
                    {{ u.player }}
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    {{ u.team }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center"
                >
                  {{ u.no }}
                </td>
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center"
                >
                  {{ u.position }}
                </td>
                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap text-center"
                >
                  {{ u.matches_played }}
                </td>

                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap text-center"
                >
                  {{ u.goals_scored }}
                </td>

                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap text-center"
                >
                  {{ u.assists }}
                </td>
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap text-center"
                >
                  {{ u.yellow_cards }} / {{ u.red_cards }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
