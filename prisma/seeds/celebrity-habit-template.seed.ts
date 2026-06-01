/**
 * Script seed dữ liệu mẫu cho môi trường dev.
 * Chạy: npm run db:seed
 *
 * Tạo:
 * - Danh mục mặc định (nếu chưa có)
 * - Celebrity habit templates
 */

import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'src/generated/prisma/client';

import {
  HabitGoalType,
  ScheduleRepeatType,
  TemplateDifficulty,
} from 'src/generated/prisma/enums';

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  }),
});

async function main() {
  const categories = [
    { name: 'Sức khỏe', color: '#22c55e', icon: 'heart' },
    { name: 'Kỷ luật', color: '#ef4444', icon: 'flame' },
    { name: 'Học tập', color: '#3b82f6', icon: 'book' },
    { name: 'Thiền', color: '#8b5cf6', icon: 'brain' },
    { name: 'Năng suất', color: '#f59e0b', icon: 'zap' },
    { name: 'Khác', color: '#6b7280', icon: 'folder', isDefault: true },
  ];

  for (const cat of categories) {
    const exists = await prisma.category.findFirst({
      where: {
        name: cat.name,
        userId: null,
      },
    });

    if (!exists) {
      await prisma.category.create({
        data: {
          ...cat,
          userId: null,
          isDefault: cat.isDefault ?? false,
        },
      });
    }
  }

  const healthCat = await prisma.category.findFirst({
    where: {
      name: 'Sức khỏe',
      userId: null,
    },
  });

  const disciplineCat = await prisma.category.findFirst({
    where: {
      name: 'Kỷ luật',
      userId: null,
    },
  });

  const learningCat = await prisma.category.findFirst({
    where: {
      name: 'Học tập',
      userId: null,
    },
  });

  const meditationCat = await prisma.category.findFirst({
    where: {
      name: 'Thiền',
      userId: null,
    },
  });

  const productivityCat = await prisma.category.findFirst({
    where: {
      name: 'Năng suất',
      userId: null,
    },
  });

  const templates = [
    {
      celebrityName: 'Cristiano Ronaldo',
      title: 'Morning Workout Routine',
      description:
        'Thói quen tập luyện buổi sáng giúp tăng thể lực và sự kỷ luật.',
      categoryId: healthCat?.id,
      difficulty: TemplateDifficulty.advanced,
      estimatedMinutes: 90,
      isFeatured: true,

      items: [
        {
          name: 'Chạy bộ khởi động',
          goalType: HabitGoalType.duration,
          goalValue: 15,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 1,
        },

        {
          name: 'Tập cardio',
          goalType: HabitGoalType.duration,
          goalValue: 30,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 2,
        },

        {
          name: 'Uống đủ nước',
          goalType: HabitGoalType.count,
          goalValue: 8,
          goalUnit: 'glass',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 3,
        },
      ],
    },

    {
      celebrityName: 'Elon Musk',
      title: 'Deep Work Session',
      description: 'Làm việc tập trung không bị phân tâm trong nhiều giờ.',
      categoryId: productivityCat?.id,
      difficulty: TemplateDifficulty.advanced,
      estimatedMinutes: 120,
      isFeatured: true,

      items: [
        {
          name: 'Tắt thông báo điện thoại',
          goalType: HabitGoalType.count,
          goalValue: 1,
          goalUnit: 'time',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 1,
        },

        {
          name: 'Deep work',
          goalType: HabitGoalType.duration,
          goalValue: 120,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 2,
        },

        {
          name: 'Review công việc',
          goalType: HabitGoalType.duration,
          goalValue: 15,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 3,
        },
      ],
    },

    {
      celebrityName: 'Kobe Bryant',
      title: '5AM Discipline',
      description:
        'Rèn luyện tinh thần Mamba Mentality với lịch sinh hoạt kỷ luật.',
      categoryId: disciplineCat?.id,
      difficulty: TemplateDifficulty.advanced,
      estimatedMinutes: 120,
      isFeatured: true,

      items: [
        {
          name: 'Thức dậy lúc 5AM',
          goalType: HabitGoalType.count,
          goalValue: 1,
          goalUnit: 'time',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 1,
        },

        {
          name: 'Tập luyện kỹ năng',
          goalType: HabitGoalType.duration,
          goalValue: 90,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 2,
        },

        {
          name: 'Viết journal',
          goalType: HabitGoalType.duration,
          goalValue: 10,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 3,
        },
      ],
    },

    {
      celebrityName: 'Andrew Huberman',
      title: 'Morning Dopamine Reset',
      description: 'Tối ưu năng lượng và dopamine bằng các thói quen khoa học.',
      categoryId: healthCat?.id,
      difficulty: TemplateDifficulty.intermediate,
      estimatedMinutes: 45,
      isFeatured: true,

      items: [
        {
          name: 'Ra nắng buổi sáng',
          goalType: HabitGoalType.duration,
          goalValue: 10,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 1,
        },

        {
          name: 'Tắm nước lạnh',
          goalType: HabitGoalType.duration,
          goalValue: 5,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 2,
        },

        {
          name: 'Không dùng điện thoại sau khi thức dậy',
          goalType: HabitGoalType.duration,
          goalValue: 30,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 3,
        },
      ],
    },

    {
      celebrityName: 'Warren Buffett',
      title: 'Daily Reading Habit',
      description: 'Xây dựng thói quen đọc sách và học tập mỗi ngày.',
      categoryId: learningCat?.id,
      difficulty: TemplateDifficulty.beginner,
      estimatedMinutes: 60,
      isFeatured: false,

      items: [
        {
          name: 'Đọc sách',
          goalType: HabitGoalType.duration,
          goalValue: 60,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 1,
        },

        {
          name: 'Ghi chú kiến thức',
          goalType: HabitGoalType.duration,
          goalValue: 15,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 2,
        },
      ],
    },

    {
      celebrityName: 'Bruce Lee',
      title: 'Meditation & Focus',
      description: 'Thiền định và rèn luyện sự tập trung mỗi ngày.',
      categoryId: meditationCat?.id,
      difficulty: TemplateDifficulty.beginner,
      estimatedMinutes: 30,
      isFeatured: false,

      items: [
        {
          name: 'Thiền',
          goalType: HabitGoalType.duration,
          goalValue: 20,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 1,
        },

        {
          name: 'Hít thở sâu',
          goalType: HabitGoalType.duration,
          goalValue: 10,
          goalUnit: 'minutes',
          repeatType: ScheduleRepeatType.daily,
          displayOrder: 2,
        },
      ],
    },
  ];

  for (const template of templates) {
    const exists = await prisma.celebrityHabitTemplate.findFirst({
      where: {
        celebrityName: template.celebrityName,
        title: template.title,
      },
    });

    if (!exists) {
      await prisma.celebrityHabitTemplate.create({
        data: {
          celebrityName: template.celebrityName,
          title: template.title,
          description: template.description,
          categoryId: template.categoryId,
          difficulty: template.difficulty,
          estimatedMinutes: template.estimatedMinutes,
          isPublic: true,
          isFeatured: template.isFeatured,

          items: {
            create: template.items,
          },
        },
      });
    }
  }

  console.log('Seed completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
