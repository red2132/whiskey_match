export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      Book: {
        Row: {
          author: string;
          coverImgUrl: string;
          description: string;
          id: number;
          publisher: string;
          searchIndex: string;
          subTitle: string;
          title: string;
        };
        Insert: {
          author: string;
          coverImgUrl: string;
          description: string;
          id?: number;
          publisher: string;
          searchIndex?: string;
          subTitle: string;
          title: string;
        };
        Update: {
          author?: string;
          coverImgUrl?: string;
          description?: string;
          id?: number;
          publisher?: string;
          searchIndex?: string;
          subTitle?: string;
          title?: string;
        };
        Relationships: [];
      };
      rating: {
        Row: {
          created_at: string;
          member_id: string;
          rating_cheeze: number;
          rating_chocolate: number;
          rating_dried_snack: number;
          rating_id: number;
          rating_meat: number;
          rating_sasimi: number;
          whiskey_id: number;
        };
        Insert: {
          created_at?: string;
          member_id: string;
          rating_cheeze: number;
          rating_chocolate: number;
          rating_dried_snack: number;
          rating_id?: number;
          rating_meat: number;
          rating_sasimi: number;
          whiskey_id: number;
        };
        Update: {
          created_at?: string;
          member_id?: string;
          rating_cheeze?: number;
          rating_chocolate?: number;
          rating_dried_snack?: number;
          rating_id: number;
          rating_meat?: number;
          rating_sasimi?: number;
          whiskey_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "rating_whiskey_id_fkey";
            columns: ["whiskey_id"];
            isOneToOne: false;
            referencedRelation: "whiskey";
            referencedColumns: ["whiskey_id"];
          }
        ];
      };
      Review: {
        Row: {
          author: string;
          bookId: number;
          content: string;
          createdAt: string;
          id: number;
        };
        Insert: {
          author: string;
          bookId: number;
          content: string;
          createdAt?: string;
          id?: number;
        };
        Update: {
          author?: string;
          bookId?: number;
          content?: string;
          createdAt?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Review_bookId_fkey";
            columns: ["bookId"];
            isOneToOne: false;
            referencedRelation: "Book";
            referencedColumns: ["id"];
          }
        ];
      };
      whiskey: {
        Row: {
          whiskey_abv: string;
          whiskey_aroma: string;
          whiskey_bg_image: string;
          whiskey_finish: string;
          whiskey_id: number;
          whiskey_name: string;
          whiskey_nation: string;
          whiskey_region: string | null;
          whiskey_taste: string;
          whiskey_thumbnail_image: string;
          whiskey_type: string;
          whiskey_volume: string;
        };
        Insert: {
          whiskey_abv: string;
          whiskey_aroma: string;
          whiskey_bg_image: string;
          whiskey_finish: string;
          whiskey_id?: number;
          whiskey_name: string;
          whiskey_nation: string;
          whiskey_region?: string | null;
          whiskey_taste: string;
          whiskey_thumbnail_image: string;
          whiskey_type: string;
          whiskey_volume: string;
        };
        Update: {
          whiskey_abv?: string;
          whiskey_aroma?: string;
          whiskey_bg_image?: string;
          whiskey_finish?: string;
          whiskey_id?: number;
          whiskey_name?: string;
          whiskey_nation?: string;
          whiskey_region?: string | null;
          whiskey_taste?: string;
          whiskey_thumbnail_image?: string;
          whiskey_type?: string;
          whiskey_volume?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      rating_type:
        | "0"
        | "0.5"
        | "1"
        | "1.5"
        | "2"
        | "2.5"
        | "3"
        | "3.5"
        | "4"
        | "4.5"
        | "5";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
